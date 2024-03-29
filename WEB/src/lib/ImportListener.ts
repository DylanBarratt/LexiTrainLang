import ImportListener from './lt/ImportsListener.js';

function removeImport(inp: string): string {
    let str = inp.replace(/import /g, '');
    str = str.replace(/\./g, '');
    return str;
}

export default class Imports extends ImportListener { 
    sessionImports: Array<string> = [];

    exitImportStatement(ctx: any): void {
        this.sessionImports.push(removeImport(ctx.getText()));
    }

    result(): Array<string> {
        return this.sessionImports;
    }
}