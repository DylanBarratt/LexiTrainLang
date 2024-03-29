import LTListener  from './lt/PeriodFileListener.js';

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

function removeSpeechMarks(str: string): string {
    return str.replace(/"/g, '');
}

//This is the final object
class PeriodFile {
    Metadata: object;
    SessionImports: Array<string>;
    Periods: Array<Period>;
}

class Period {
    Title: string;
    Days: Array<Day>;
}

class Day {
    DayName: string; // day in period. e.g. Mon
    Sessions: Array<DayData>;
}

class DayData {
    Import: boolean = false;
    ImportedName: string = null;
    Sport: string = null;
    Sections: Array<Section>; //this is where the workloads are stored. By default only one section
    Notes: string = null; 
}

class Section {
    Title: string = null;
    Workloads: Array<WorkloadExtended>;
}

class WorkloadExtended {
    Load: number = null;
    Notes: string = null;
    Workload: Workload;
    Repeats: number = 1;
}

class Workload {
    Time: string; 
    Type: WLType;
    Zone: string = null;
};

enum WLType {
    LessThan = 'lt',
    GreaterThan = 'gt',
    Between = 'bt',
    At = 'at',
    None = 'none'
}


export default class PeriodListener extends LTListener { 
    constructor() {
        super();
    }

    private metadatas: object = {};
    exitMetaData(ctx) {
        this.metadatas[capitalizeFirstLetter(ctx.children[0].getText())] = removeSpeechMarks(ctx.children[2].getText());
    }

    private sessionImports: Array<string> = [];
    exitSessionImport(ctx) {
        this.sessionImports.push(removeSpeechMarks(ctx.children[1].getText()));
    }


    private periods: Array<Period> = []
    private currPeriod: number = 0;

    enterPeriod(ctx: any): void {
        this.periods[this.currPeriod] = new Period;
        this.periods[this.currPeriod].Title = removeSpeechMarks(ctx.WORD().getText());
        this.periods[this.currPeriod].Days = [];
    }

    private currDay: Day;
    private repeats: number = 0;
    enterDay(ctx: any): void {
        this.currDay = new Day;

        if (ctx.WORD()) { //specified day
            this.currDay.DayName = ctx.WORD().getText();
            this.repeats = 0;
        } else if (ctx.NUM()) {
            this.repeats = parseInt(ctx.NUM().getText(), 10);  //num of loops
        } else {
            this.repeats = 0;
        }
    }

    private sessions: Array<DayData>
    enterDayData(ctx: any): void {
        this.sessions = [];
    }

    //todo imported sessions could be loaded here instead?
    enterImported(ctx: any): void {
        let session: DayData = new DayData;

        session.Import = true;
        session.Sections = null;
        session.ImportedName = ctx.IMPORTED().getText().replace(/\[|\]/g, '');

        this.sessions.push(session);
    }

    //workloads to be saved in workout
    private workloads: Array<WorkloadExtended> = [];

    enterWorkloadL(ctx: any): void {
        let workloadL:WorkloadExtended = new WorkloadExtended;

        this.workloads.push(workloadL);
    }

    private wlType: WLType = null;
    private wlZone = null;
    enterWorkload() {
        this.wlType = null;
        this.wlZone = null;
    }

    enterLt(ctx) {
        this.wlType = WLType.LessThan;
        this.wlZone = ctx.WORD().getText();
    }

    enterGt(ctx) {
        this.wlType = WLType.GreaterThan;
        this.wlZone = ctx.WORD().getText();
    }

    enterBetween(ctx) {
        this.wlType = WLType.Between;
        this.wlZone = [ctx.children[0].getText(), ctx.children[2].getText()];
    }

    private curWl: Workload = new Workload;
    exitWorkload(ctx: any): void {
        this.curWl = {Time: null, Type: null, Zone: null};

        this.curWl.Time = ctx.children[0].getText();

        if (this.wlType == null) { //still unitialised
            if (ctx.children.length == 2) {
                this.wlType = WLType.At;
                this.wlZone = ctx.children[1].getText();
            } else if (ctx.children.length == 1) { 
                this.wlType = WLType.None;
            }
        }

        this.curWl.Type = this.wlType;
        this.curWl.Zone = this.wlZone;
    }


    exitWorkloadL(ctx: any): void {
        let wlL = new WorkloadExtended;
        
        wlL.Workload = this.curWl;

        if (ctx.NUM()) {
            wlL.Load = ctx.NUM().getText();
        }

        if (ctx.WORD()) {
            wlL.Notes = ctx.WORD().getText();
        }

        if (this.sessionSectionRepeats) {
            wlL.Repeats = this.sessionSectionRepeats;
        }

        this.workloads[this.workloads.length - 1] = wlL;
    }

    exitWorkout(ctx: any): void {
        let session: DayData = new DayData;

        session.Import = false;
        session.Sport = removeSpeechMarks(ctx.SPORT().getText());

        session.Sections = [];
        let section: Section = new Section;

        section.Workloads = this.workloads;
        session.Sections.push(section);
        this.workloads = [];

        this.sessions.push(session);
    }

    private sessionSections:Array<Section> = [];
    private sessionSectionRepeats: number = 1; //by default it is repeated once

    enterSessionSection(ctx: any): void {
        let s = new Section;
        s.Title = removeSpeechMarks(ctx.WORD().getText());

        if (ctx.NUM()) {
            this.sessionSectionRepeats = ctx.NUM().getText();
        }

        this.sessionSections.push(s);
    }

    exitSessionSection(ctx: any): void {
        this.sessionSections[this.sessionSections.length-1].Workloads = this.workloads;

        this.workloads = [];
        this.sessionSectionRepeats = 1;
    }

    exitSession(ctx: any): void {
        let session: DayData = new DayData;

        session.Sport = ctx.children[1].getText();
        session.Sections = this.sessionSections;

        this.sessionSections = [];
    }

    exitDayData(ctx: any): void {
        if (ctx.NOTES()) {
            let session: DayData = new DayData;
            session.Notes = removeSpeechMarks(ctx.WORD().getText());
            this.sessions.push(session);
        }

        if (this.repeats > 0) {
            let repeat: DayData = this.sessions[this.sessions.length - 1];

            for (let i = 0; i < this.repeats - 1; i++) {
                this.sessions.push(repeat);
            }
        }
    }
    
    exitDay(ctx: any): void {
        this.currDay.Sessions = this.sessions;

        this.periods[this.currPeriod].Days.push(this.currDay);

        this.currDay = null;
    }


    exitPeriod(ctx: any): void {
        this.currPeriod++;
    }

    public result():PeriodFile {
        return {Metadata: this.metadatas, SessionImports: this.sessionImports, Periods: this.periods};
    }
}