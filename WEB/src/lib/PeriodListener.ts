import LTListener  from './lt/PeriodFileListener.js';

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

function removeSpeechMarks(str: string): string {
    return str.replace(/"/g, '');
}

class Period {
    Metadata: object;
    SessionImports: Array<string>;
    Periods;
}

//todo old, periods needs to be renamed
// class Period {
//     Title: string;
//     Day: Date;
//     Repeats: number;
//     Data;
// }

class Session {
    Import: boolean = false;
    Sport: string;
    Sections;
    Data;
}

export default class PeriodListener extends LTListener { 
    metadatas: object = {};
    sessionImports: Array<string> = [];

    //todo fix type yos
    periods: Array<Period> = [];
    currentPeriod: number = 0;
    currentDay: number = 0; 

    daySessions: Array<Session> = [];

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
        this.metadatas[capitalizeFirstLetter(ctx.children[0].getText())] = removeSpeechMarks(ctx.children[2].getText());
    }

    exitSessionImport(ctx) {
        this.sessionImports.push(removeSpeechMarks(ctx.children[1].getText()));
    }

    enterPeriod(ctx) {
        var newPeriod = {
            Title: removeSpeechMarks(ctx.WORD().getText()),
            Day: null,
            Repeats: null,
            Data: null
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

        this.periods[this.currentPeriod][this.currentDay] = {Day: day, Repeats: repeats, Data: null};

        this.daySessions = [];
    }

    exitImported(ctx) {
        let importedSession: Session = {
            Import: true, 
            Sport: null,
            Sections: null,
            Data: ctx.IMPORTED().getText().replace(/\[|\]/g, ''),
        };

        this.daySessions.push(importedSession);
    }

    exitWorkouts(ctx) {
        const workouts = ctx.workout()
            .map(workoutCtx => this.visit(workoutCtx));

        workouts.forEach(workout => {
            let workoutSession: Session = {
                Import: false, 
                Sport: workout[0].replace(/[()]/g, ''),
                Sections: null,
                Data: workout[1],
            }
            this.daySessions.push(workoutSession);
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

        let inlineSession: Session = {
            Import: false, 
            Sport: sport,
            Sections: finalSections,
            Data: null,
        }
        this.daySessions.push(inlineSession);
    }

    exitPeriodPair(ctx) {
        this.periods[this.currentPeriod][this.currentDay].Data = this.daySessions;
        this.currentDay++;
    }

    result():Period {
        return {Metadata: this.metadatas, SessionImports: this.sessionImports, Periods: this.periods};
    }
}