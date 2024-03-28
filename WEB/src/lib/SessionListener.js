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
    repeats = null;

    currSection = 0;
    currWorkload = 0;

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
    this.currWorkload = 0;
   }

   enterStructure(ctx) {
    this.repeats = ctx.NUM().getText();
   }

   enterWorkloadL(ctx) {
    this.workloads[this.currWorkload] = {
        Data: null, Notes: null
    };
   }

   enterNote(ctx) {
    this.workloads[this.currWorkload].Notes = removeSpeechMarks(ctx.WORD().getText());
   }

   exitWorkloadL(ctx) {
    this.currWorkload++;
   }

   exitStructure(ctx) {
    this.repeats = 0;
   }

   exitSection (ctx) {
    this.sections[this.currSection].Workloads = this.workloads;
    this.currSection++;
   }

    result() {
     return {Metadata: this.metadata, Sections: this.sections};
    }
}