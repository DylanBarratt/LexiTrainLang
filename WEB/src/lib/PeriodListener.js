import LTListener  from './lt/PeriodFileListener.js';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

export default class PeriodListener extends LTListener { 
    metadatas = {};
    sessionImports = {};

    periods = [];
    currentPeriod = 0;
    currentDay = 0; 

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
        this.sessionImports[ctx.children[0].getText()] = ctx.children[2].getText().replace(/"/g, '');
    }

    enterPeriod(ctx) {
        var newPeriod = {
            'title': ctx.WORD().getText(),
        }
        
        this.periods.push(newPeriod);
        this.currentPeriod = this.periods.length - 1;
    }

    enterPeriodPair(ctx) {
        var day;

        if (ctx.WORD()) {
            day = ctx.WORD().getText();
        } else if (ctx.NUM()){
            day = parseInt(ctx.NUM().getText()); //num of loops
        } else {
            day = null;
        }

        this.periods[this.currentPeriod][this.currentDay] = {Day: day, Data: null} ;
    }

    exitPeriodPair(ctx) {
        this.currentDay++;
    }

    exitWorkouts(ctx) {
        const workouts = ctx.workout()
            .map(workoutCtx => this.visit(workoutCtx));

        var finalWorkouts = [];
        workouts.forEach(workout => {
            finalWorkouts.push({Sport: workout[0].replace(/[()]/g, ''), Data: workout[1]})
        });

        this.periods[this.currentPeriod][this.currentDay].Data = finalWorkouts;
    }

    exitSession(ctx) {
        const sport = ctx.SPORT().getText().replace(/[()]/g, '');
        const sessionSections = ctx.sessionSection()
            .map(sessionSectionCtx => this.visit(sessionSectionCtx));

        var finalSections = [];
        sessionSections.forEach(section => {

            var workloads = [];
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

            finalSections.push({Title: section[0], Workloads: workloads})
        });

        this.periods[this.currentPeriod][this.currentDay].Data = [{Sport: sport, Sections: finalSections}];
    }

    result() {
        return {Metadata: this.metadatas, SessionImports: this.sessionImports, Periods: this.periods};
    }
}