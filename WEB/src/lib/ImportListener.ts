import LTListener from './lt/PeriodFileListener.js';

export default class Imports extends LTListener { 
    sessionImports: Array<string> = [];

    exitSessionImport(ctx): void {
        this.sessionImports.push(ctx.children[1].getText().replace(/"/g, ''));
    }

    result(): Array<string> {
        return this.sessionImports;
    }
}