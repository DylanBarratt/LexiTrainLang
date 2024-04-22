import { ParseImports, ParseSession, ParseFull } from "./Antlr";
import type { Session, PeriodFile, FileString, parseReturnObj } from "./DataTypes";
import { flattenPeriods } from "./HelperFunctions";

export function getRequiredImports(periodInp: string): Array<string> {
    try {
        return ParseImports(periodInp);
    } catch (e) {
        throw e;
    }
}

//abbrv to remove confusion with variable of similar name - Dyaln
export function parseSFS(requiredImports: Array<string>, unparsedSessionFiles: object): object {
    let parsedSessionFiles: object = {};
    let counter = 0;

    if (requiredImports.length != Object.entries(unparsedSessionFiles).length) {
        throw new Error('Missing session files');
    }

    Object.entries(unparsedSessionFiles).forEach(([key, value]) => {    
        let s: Session = parseSF(value);
        parsedSessionFiles[requiredImports[counter]] = s;
        counter++;
    });
    return parsedSessionFiles;
}


//abbrv to remove confusion with variable of similar name - Dyaln
export function parseSF(sessionInp: string): Session {
    try {
        return ParseSession(sessionInp);
    } catch (e) {
        throw e;
    }
}

export function parseFullPeriod(periodInp: string, sessions: object): PeriodFile {
    try {
    return ParseFull(periodInp, sessions);
    } catch (e) {
        throw e;
    }
}

export function sessionFileProcessed(name: string, contents: string, unparsedSessionFiles: object): object {  
    if (typeof unparsedSessionFiles[name] === 'undefined') {
        unparsedSessionFiles[name] = contents;
    }

    return unparsedSessionFiles;
}

export function removeOldSessionFile(oldName: string, unparsedSessionFiles: object): object {
    if (unparsedSessionFiles.hasOwnProperty(oldName)) {
        delete unparsedSessionFiles[oldName];
    }

    return unparsedSessionFiles;
}

export function parseAll(ideText: string, requiredImports: Array<string>, unparsedSessionFiles: object): PeriodFile {
    let parsedSessions: object = null;
    
    try {
        parsedSessions = parseSFS(requiredImports, unparsedSessionFiles);
    } catch (e) {
        throw e;
    }

    return parseFullPeriod(ideText, parsedSessions);
}