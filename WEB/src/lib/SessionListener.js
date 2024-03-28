import SessionFileListener from "./lt/SessionFileListener";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

function removeSpeechMarks(str) {
    return str.replace(/"/g, '');
}

function isNumber(value) {
    return !isNaN(value);
}

export default class SessionListener extends SessionFileListener {
    metadata = {};
    sections = [];

    workloads = [];
    repeats = 0;

    currSection = 0;

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

    enterSectionContents(ctx) {
        this.workloads = [];
    }

    enterStructure(ctx) {
        this.repeats = ctx.NUM().getText();
    }

    exitStructure(ctx) {
        this.repeats = 0;
    }

    wlType = null;
    wlZone = null;

    enterWorkload(ctx) {
        this.wlType = null;
        this.wlZone = null;
    }

    enterLt(ctx) {
        this.wlType = 'lt';
        this.wlZone = ctx.WORD().getText();
    }

    enterGt(ctx) {
        this.wlType = 'gt';
        this.wlZone = ctx.WORD().getText();
    }

    enterBetween(ctx) {
        this.wlType = 'bt';
        this.wlZone = [ctx.children[0].getText(), ctx.children[2].getText()];
    }

    exitWorkload(ctx) {
        let workload = {Time: null, Type: null, Zone: null};

        workload.Time = ctx.children[0].getText();

        if (this.wlType == null) { //still unitialised
            if (ctx.children.length == 2) {
                this.wlType = 'at';
                this.wlZone = ctx.children[1].getText();
            } else if (ctx.children.length == 1) { 
                this.wlType = 'none';
            }
        }

        workload.Type = this.wlType;
        workload.Zone = this.wlZone;

        this.workloads.push({Repeats: this.repeats, Workload: workload})
    }

    exitSectionContents(ctx) {
        this.sections[this.currSection].Workloads = this.workloads;
        this.currSection++;
        //save note here as well
    }

    result() {
        return {Metadata: this.metadata, Sections: this.sections};
    }
}