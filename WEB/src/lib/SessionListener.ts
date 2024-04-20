import { SessionMetadata, Section, WorkloadExtended, WLType, Workload, Session } from "./DataTypes";
import { removeSpeechMarks, capitalizeFirstLetter, sportStringToValidSport, stringToZone } from "./HelperFunctions";
import SessionFileListener from "./lt/SessionFileListener";

export default class SessionListener extends SessionFileListener {
    metadata: SessionMetadata = new SessionMetadata;

    sections: Array<Section> = [];

    workloads: Array<WorkloadExtended> = [];
    repeats: number = 0;

    currSection:number = 0;

    visit(ctx) {
        if (ctx.children) {
            const childResults = ctx.children.map(child => this.visit(child));
            return childResults;
        } else {
            return removeSpeechMarks(ctx.getText());
        }
    }

    exitMetaData(ctx) {
        switch (capitalizeFirstLetter(ctx.children[0].getText())) {
            case "Title":
                this.metadata.Title = removeSpeechMarks(ctx.children[2].getText());
                break;
            case "Author":
                this.metadata.Author = removeSpeechMarks(ctx.children[2].getText());
                break;
            case "Sport":
                this.metadata.Sport = sportStringToValidSport(ctx.children[2].getText());
                break;
            case "Load":
                this.metadata.Load = removeSpeechMarks(ctx.children[2].getText());
                break;
            case "Note":
                this.metadata.Note = removeSpeechMarks(ctx.children[2].getText());
                break;
        }
    }

    exitMetaDatas(ctx: any): void {
        if (this.metadata.Title == null) {
            throw new Error("Title required in session file");
        }

        if (this.metadata.Sport == null) {
            throw new Error("Sport required in session file");
        }
    }

    enterSection(ctx) {
        this.sections[this.currSection] = {Title: removeSpeechMarks(ctx.WORD().getText()), Workloads: null};
    }

    enterSectionContents() {
        this.workloads = [];
    }

    enterStructure(ctx) {
        this.repeats = ctx.NUM().getText();
    }

    exitStructure() {
        this.repeats = 0;
    }

    wlType: WLType = null;
    wlZone = [];

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

    note:string = null
    enterNote(ctx: any): void {
        this.note = removeSpeechMarks(ctx.WORD().getText());
    }

    exitWorkload(ctx) {
        let workload: Workload = {Time: null, Type: null, Zone: null};

        workload.Time = ctx.children[0].getText();

        if (this.wlType == null) { //still unitialised
            if (ctx.children.length == 2) {
                this.wlType = WLType.At;
                this.wlZone[0] = stringToZone(ctx.children[1].getText());
            } else if (ctx.children.length == 1) { 
                this.wlType = WLType.None;
            }
        }

        workload.Type = this.wlType;
        workload.Zone = this.wlZone;

        let wl: WorkloadExtended = new WorkloadExtended;
        wl.Repeats = this.repeats;

        wl.Notes = this.note;

        this.note = null;

        wl.Workload = workload;
        
        this.workloads.push(wl)
    }

    exitSectionContents() {
        this.sections[this.currSection].Workloads = this.workloads;
        this.currSection++;
        //todo save note here as well
    }

    result():Session {
        return {Metadata: this.metadata, Sections: this.sections};
    }
}