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

export class Section {
    Title: string = null;
    Workloads: Array<WorkloadExtended>;
}

export class Session { // the final object for session listener
    Metadata: SessionMetadata; 
    Sections: Array<Section>;
}

export class SessionMetadata {
    Title: string = null;
    Author: string = null;
    Sport: string = null;
    Load: string = null;
    Note: string = null;
}

export class PeriodMetadata {
    Title: string = null;
    Author: string = null;
    Date: Date = null;
    Start_Date: Date = null;
    End_Date: Date = null;
}

export class PeriodFile { //This is the final object for period listener
    Metadata: PeriodMetadata;
    Periods: Array<Period>;
}

export class Period {
    Title: string;
    Days: Array<Day>;
}

export class Day {
    DayName: string; // day in period. e.g. Mon
    Sessions: Array<DayData>;
}

export class DayData {
    Sport: string = null;
    Sections: Array<Section>; //this is where the workloads are stored. By default only one section
    Notes: string = null; 
}
