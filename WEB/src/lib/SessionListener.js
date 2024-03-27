import SessionFileListener from "./lt/SessionFileListener";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

function removeSpeechMarks(str) {
    return str.replace(/"/g, '');
}

export default class SessionListener extends SessionFileListener {
    metadata = {};
    sections = [];

    workloads = [];

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

    enterWorkloads(ctx) {
        //reset workloads
        this.workloads = [];
    }

    exitWorkload(ctx) {
        let workload = {Time: ctx.children[0].getText(), Repeats: null, Intensity: null};

        if (ctx.children.length == 1) {
            console.log("// no specified intensity");
        }

        this.workloads.push(workload);
    }

    exitSection(ctx) {
        this.sections[this.currSection].Workloads = this.workloads;
        this.currSection++;
    }

    result() {
        return {Metadata: this.metadata, Sections: this.sections};
    }
}