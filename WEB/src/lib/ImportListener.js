import LTListener  from './lt/PeriodFileListener.js';


export default class Imports extends LTListener { 
    sessionImports = [];

    exitSessionImport(ctx) {
        this.sessionImports.push(ctx.children[1].getText().replace(/"/g, ''));
    }

    result() {
        return this.sessionImports;
    }
}