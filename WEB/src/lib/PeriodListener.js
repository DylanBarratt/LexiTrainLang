import LTListener  from './lt/PeriodFileListener.js';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

function removeSpeechMarks(str) {
    return str.replace(/"/g, '');
}

export default class PeriodListener extends LTListener { 
    metadatas = {};
    sessionImports = [];

    periods = [];
    currentPeriod = 0;
    currentDay = 0; 

    daySessions = [];

    visit(ctx) {
        if (ctx.children) {
            const childResults = ctx.children.map(child => this.visit(child));
            return childResults;
        } else {
            return ctx.getText().replace(/"/g, '');
        }
    }

    //TODO: speech marks need to be removed
    exitMetaData(ctx) {
        this.metadatas[capitalizeFirstLetter(ctx.children[0].getText())] = ctx.children[2].getText().replace(/"/g, '');
    }

    exitSessionImport(ctx) {
        this.sessionImports.push(ctx.children[1].getText().replace(/"/g, ''));
    }

    enterPeriod(ctx) {
        var newPeriod = {
            'title': removeSpeechMarks(ctx.WORD().getText()),
        }
        
        this.periods.push(newPeriod);
        this.currentPeriod = this.periods.length - 1;
    }

    enterPeriodPair(ctx) {
        var day;
        var repeats;

        if (ctx.WORD()) { //specified day
            day = ctx.WORD().getText();
        } else if (ctx.NUM()){  //looped days (unspecified day)
            day = null;
            repeats = parseInt(ctx.NUM().getText(), 10);  //num of loops
        } else { //non-specified day
            day = null;
        }

        this.periods[this.currentPeriod][this.currentDay] 
            = {Day: day, Repeats: repeats, Data: null};

        this.daySessions = [];
    }

    exitImported(ctx) {
        this.daySessions.push(ctx.IMPORTED().getText().replace(/\[|\]/g, ''));
    }

    exitWorkouts(ctx) {
        const workouts = ctx.workout()
            .map(workoutCtx => this.visit(workoutCtx));

        workouts.forEach(workout => {
            this.daySessions.push({Sport: workout[0].replace(/[()]/g, ''), Data: workout[1]})
        });

    }

    exitSession(ctx) {
        const sport = ctx.SPORT().getText().replace(/[()]/g, '');
        const sessionSections = ctx.sessionSection()
            .map(sessionSectionCtx => this.visit(sessionSectionCtx));

        var finalSections = [];
        sessionSections.forEach(section => {
            var workloads = [];

            if (!isNaN(section[2])) { // when the section contains a loop
                let numRepeats = section[2];

                for (let i = 0; i < numRepeats; i++) {
                    section[5].forEach(workload => { //skips * and {
                        if (workload.length == 3) {
                            workloads.push({Type: "lg", Data: workload});
                        } else if (workload.length == 4) {
                            workloads.push({Type: "between", Data: workload});
                        } else {
                            workloads.push({Type: "ar", Data: workload});
                        }
                    })
                }
            } else {
                section[2].forEach(workload => {
                    if (workload != '&&') {
                        if (workload.length == 3) {
                            workloads.push({Type: "lg", Data: workload});
                        } else if (workload.length == 4) {
                            workloads.push({Type: "between", Data: workload});
                        } else {
                            workloads.push({Type: "ar", Data: workload});
                        }
                    }
                })
            }

            finalSections.push({Title: section[0], Workloads: workloads})
        });

        this.daySessions.push({Sport: sport, Sections: finalSections});
    }

    exitPeriodPair(ctx) {
        this.periods[this.currentPeriod][this.currentDay].Data = this.daySessions;
        this.currentDay++;
    }

    result() {
        return {Metadata: this.metadatas, SessionImports: this.sessionImports, Periods: this.periods};
    }
}