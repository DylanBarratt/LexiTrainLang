import { Day, DayData, IntensityZone, Period, PeriodFile, PeriodMetadata, Section, Session, WLType, Workload, WorkloadExtended } from './DataTypes';
import { capitalizeFirstLetter, removeSpeechMarks, stringToDate, sportStringToValidSport, stringToZone, validTimeString } from './HelperFunctions';
import LTListener  from './lt/PeriodFileListener.js';
export default class PeriodListener extends LTListener { 
    private importedFiles: Object;

    constructor(importedFiles: Object) {
        super();
        this.importedFiles = importedFiles;
    }
    
    private metadata: PeriodMetadata = new PeriodMetadata;
    exitMetaData(ctx: any) {
        this.metadata[capitalizeFirstLetter(ctx.children[0].getText())] = removeSpeechMarks(ctx.children[2].getText());
    
        switch (capitalizeFirstLetter(ctx.children[0].getText())) {
            case "Title":
                this.metadata.Title = removeSpeechMarks(ctx.children[2].getText());
                break;
            case "Author":
                this.metadata.Author = removeSpeechMarks(ctx.children[2].getText());
                break;
            case "Date":
                this.metadata.Date = stringToDate(ctx.children[2].getText());
                break;
            case "Start_date":
                this.metadata.Start_Date = stringToDate(ctx.children[2].getText());
                break;
            case "End_date":
                this.metadata.End_Date = stringToDate(ctx.children[2].getText());
                break;
        }

        if (this.metadata.Title == null) {
            throw new Error("Title required in session file");
        }
    }


    exitMetaDatas(ctx: any): void {
        if (this.metadata.Start_Date != null && this.metadata.End_Date != null) {
            throw new Error("Both start date and end date not supported");
        }
    }

    private periods: Array<Period> = []
    private currPeriod: number = 0;

    enterPeriod(ctx: any): void {
        this.periods[this.currPeriod] = new Period;
        this.periods[this.currPeriod].Title = removeSpeechMarks(ctx.WORD().getText());
        this.periods[this.currPeriod].Days = [];
    }

    private currDay: Day;
    private repeats: number = 1;
    private sessions: Array<DayData>
    enterDay(ctx: any): void {
        this.currDay = new Day;

        if (ctx.WORD()) { //specified day
            this.currDay.DayName = ctx.WORD().getText();
            this.repeats = 1;
        } else if (ctx.NUM()) {
            this.repeats = parseInt(ctx.NUM().getText(), 10);  //num of loops
        } else {
            this.repeats = 1;
        }

        this.sessions = []; 
    }

    //todo imported sessions could be loaded here instead?
    enterImported(ctx: any): void {
        let session: DayData = new DayData;

        let importName: string = ctx.IMPORTED().getText().replace(/\[|\]/g, '');

        if (typeof this.importedFiles[importName] === 'undefined') {
            throw new Error(importName + " not imported")
        }

        let importedFile: Session = this.importedFiles[importName];
        
        session.Sections = importedFile.Sections;
        session.Sport = importedFile.Metadata.Sport;
        session.Notes = importedFile.Metadata.Note;

        this.sessions.push(session);
    }

    //workloads to be saved in workout
    private workloads: Array<WorkloadExtended> = [];

    enterWorkloadL(ctx: any): void {
        let workloadL:WorkloadExtended = new WorkloadExtended;

        this.workloads.push(workloadL);
    }

    private wlType: WLType = null;
    private wlZone: Array<IntensityZone> = [];

    enterWorkload() {
        this.wlType = null;
        this.wlZone = [];
    }

    enterLt(ctx) {
        this.wlType = WLType.LessThan;
        this.wlZone[0] = stringToZone(ctx.WORD().getText());
    }

    enterGt(ctx) {
        this.wlType = WLType.GreaterThan;
        this.wlZone[0] = stringToZone(ctx.WORD().getText());
    }

    enterBetween(ctx) {
        this.wlType = WLType.Between;
        this.wlZone[0] = stringToZone(ctx.children[0].getText());
        this.wlZone[1] = stringToZone(ctx.children[2].getText());
    }

    private curWl: Workload = new Workload;
    exitWorkload(ctx: any): void {
        this.curWl = {Time: null, Type: null, Zone: null};

        var timeSt: string = ctx.children[0].getText();
        if (!validTimeString(timeSt)) {
            throw new Error("Invalid time string: " + timeSt);
        } 

        this.curWl.Time = timeSt;        


        if (this.wlType == null) { //still unitialised
            if (ctx.children.length == 2) {
                this.wlType = WLType.At;
                this.wlZone[0] = stringToZone(ctx.children[1].getText());
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
            wlL.Notes = removeSpeechMarks(ctx.WORD().getText());
        }
        
        if (this.sessionSectionRepeats) {
            wlL.Repeats = this.sessionSectionRepeats;
        }
        
        this.workloads[this.workloads.length - 1] = wlL;
    }

    exitWorkout(ctx: any): void {
        let session: DayData = new DayData;

        session.Sport = sportStringToValidSport(ctx.SPORT().getText());

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

        session.Sport = sportStringToValidSport(ctx.children[1].getText());
        session.Sections = this.sessionSections;

        this.sessions.push(session);

        this.sessionSections = [];
    }

    exitDayNotes(ctx: any): void {
        let session: DayData = new DayData;
        session.Notes = removeSpeechMarks(ctx.WORD().getText());
        this.sessions.push(session);
    }
    
    exitDay(ctx: any): void {
        this.currDay.Sessions = this.sessions;

        this.periods[this.currPeriod].Days.push(this.currDay);
        
        if (this.repeats > 1) {
            for (let i = 0; i < this.repeats - 1; i++) {
                this.periods[this.currPeriod].Days.push(this.currDay)
            }
        }

        this.currDay = null;
    }


    exitPeriod(ctx: any): void {
        this.currPeriod++;
    }

    public result():PeriodFile {
        return {Metadata: this.metadata, Periods: this.periods};
    }
}