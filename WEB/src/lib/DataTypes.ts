export class Session { // the final object for session listener
    Metadata: SessionMetadata; 
    Sections: Array<Section>;
}

export class SessionMetadata {
    Title: string = null;
    Author: string = null;
    Sport: ValidSport;
    Load: string = null;
    Note: string = null;
}




export class PeriodFile { //This is the final object for period listener
    Metadata: PeriodMetadata;
    Periods: Array<Period>;
}

export class PeriodMetadata {
    Title: string = null;
    Author: string = null;
    Date: Date = null;
    Start_Date: Date = null;
    End_Date: Date = null;
}

export class Period {
    Title: string;
    Days: Array<Day>;
}

export class Day {
    DayName: string = null; // day in period. e.g. Mon
    Sessions: Array<DayData>;
}

export class DayData {
    Sport: ValidSport = null;
    Sections: Array<Section>; //this is where the workloads are stored. By default only one section
    Notes: string = null; 
}

export class Section {
    Title: string = null;
    Workloads: Array<WorkloadExtended>;
}


export enum WLType {
    LessThan = 'lt',
    GreaterThan = 'gt',
    Between = 'bt',
    At = 'at',
    None = 'none'
}

export class WorkloadExtended {
    Load: number = null;
    Notes: string = null;
    Workload: Workload;
    Repeats: number = 1;
}

export class Workload {
    Time: string; 
    Type: WLType;
    Zone: string = null;
};

export enum ValidSport {
    Swimming = "fa-solid fa-person-swimming",
    Cycling = "fa-solid fa-person-biking",
    Running = "fa-solid fa-person-running",
    Walking = "fa-solid fa-person-walking",
    Gym = "fa-solid fa-dumbbell",
    Other = "fa-solid fa-question",
    Note = "fa-solid fa-note-sticky"
}




export class FileUploadOut {
    Name: string;
    File: File;
}

export class FileString {
    Name: string;
    FileContents: string;
}



//todo the title of periods is ignored, if not used can be removed from data
// maybe store it as a note?
export class DayFinal {
    Date: Date;
    Sessions: Array<DayData>;
    Dated: boolean = false; // false for undated (not given a specific day in the week)
}