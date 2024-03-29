import SessionFileListener from "./lt/SessionFileListener";

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

function removeSpeechMarks(str: string): string {
    return str.replace(/"/g, '');
}

function isNumber(value): boolean {
    return !isNaN(value);
}

enum WLType {
    LessThan = 'lt',
    GreaterThan = 'gt',
    Between = 'bt',
    At = 'at',
    None = 'none'
}

class Workload {
    Time: string; 
    Type: WLType;
    Zone: string;
};

class WorkloadExtended {
    Repeats: number;
    Workload: Workload;
}

class Section {
    Title: string;
    Workloads: Array<WorkloadExtended>;
}

class Session { // the final object
    Metadata: object; 
    Sections: Array<Section>;
}


export default class SessionListener extends SessionFileListener {
    metadata: any = {};

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
        this.metadata[capitalizeFirstLetter(ctx.children[0].getText())] = removeSpeechMarks(ctx.children[2].getText());
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
    wlZone = null;

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

    exitWorkload(ctx) {
        let workload: Workload = {Time: null, Type: null, Zone: null};

        workload.Time = ctx.children[0].getText();

        if (this.wlType == null) { //still unitialised
            if (ctx.children.length == 2) {
                this.wlType = WLType.At;
                this.wlZone = ctx.children[1].getText();
            } else if (ctx.children.length == 1) { 
                this.wlType = WLType.None;
            }
        }

        workload.Type = this.wlType;
        workload.Zone = this.wlZone;

        this.workloads.push({Repeats: this.repeats, Workload: workload})
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