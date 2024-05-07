import { DayFinal, type Day, type Period, type PeriodFile, ValidSport, IntensityZone, ExtraDayT,  DayData, WLType, intensityZoneProperties, flattenParseT } from "./DataTypes";

export function dayNameToIndex(dayName: string): number {
    // Convert the day name to lowercase for case insensitivity
    var lowerCaseDayName = dayName.toLowerCase();

    // Define a map of day names to their indices
    var dayMap = {
        'sun': 0,
        'mon': 1,
        'tue': 2,
        'wed': 3,
        'thu': 4,
        'fri': 5,
        'sat': 6,
    };

    // Look up the day index in the map
    return dayMap[lowerCaseDayName];
}

export function daysToWeek(days: Array<Day>): Array<Day> {
    var fullWeek: Array<Day> = Array(7).fill(null);
    var extraI = 7;
    days.forEach((day: Day) => {
        var dayName = day.DayName;
        if (day.DayName != null) {
            dayName = dayName.toLowerCase()
            console.log(dayName);
        }
        
        
        switch (dayName) {
            case "mon":
                fullWeek[0] = day
                break;
            case "tue":
                fullWeek[1] = day
                break;
            case "wed":
                fullWeek[2] = day
                break;
            case "thu":
                fullWeek[3] = day
                break;
            case "fri":
                fullWeek[4] = day
                break;
            case "sat":
                fullWeek[5] = day
                break;
            case "sun":
                fullWeek[6] = day
                break;
            case null:
                fullWeek[extraI] = day
                extraI++;
                break;
            default:
                throw new Error ("Invalid day name: " + day.DayName)
                
                break;
        }
    });

    return fullWeek;
}

// I don't like this function... feels messy - Dylan
// flatten periods in a period file
export function flattenPeriods(periodFile: PeriodFile): flattenParseT {
    let combinedDaysRaw: Array<Day | null> = [];
    let extraDays: Array<ExtraDayT> = [];

    let daysUntilFirst: number = 0; 
    let firstNamedDayI: number = null;

    let periodCount = 0;
    let dated = false;
    // combine weeks into single array with missed days as null
    periodFile.Periods.forEach((period: Period) => { 
        let weekData: Array<Day | null> = daysToWeek(period.Days);
        
        for (let i = 0; i < 7; i++) {
            //skip null days before first date
            if (!(firstNamedDayI == null && weekData[i] == null)) {
                combinedDaysRaw.push(weekData[i]); 
            } 

            //saves first named day
            if (weekData[i] != null && firstNamedDayI == null) {
                if (weekData[i].DayName != null) {
                    firstNamedDayI = dayNameToIndex(weekData[i].DayName);
                    dated = true;
                } else if (firstNamedDayI == null) {
                    daysUntilFirst++;
                }
            }
        }    

        //extra days
        for (let i = 7; i < weekData.length; i++) {
            let ed: ExtraDayT = new ExtraDayT;
            ed.Sessions = weekData[i].Sessions;
            ed.Period = periodCount;
            extraDays.push(ed)
        }
        periodCount++;
    }); 

    //start date
    let date: Date = new Date();
    let reverse: boolean = false;
    
    //trick code here - just fills the array in backwards for an end date ;)
    if (typeof periodFile.Metadata.End_Date === 'string') { 
        date = stringToDate(periodFile.Metadata.End_Date);
        dated = true;
        reverse = true; 
        combinedDaysRaw.reverse();
    } else if (typeof periodFile.Metadata.Start_Date === 'string') { 
        date = stringToDate(periodFile.Metadata.Start_Date);
        dated = true;
    } 
  
    //if null just start on today. date left as initialised
    if (firstNamedDayI != null) { 
        //find first instance of first day 
        let dateFound: boolean = false;
        while (!dateFound) {
            if (date.getDay() == firstNamedDayI) {
                dateFound = true;
                break;
            }
            
            date.setDate(date.getDate() + 1);
        }
    
        date.setDate(date.getDate() - daysUntilFirst) //offset first found by days previous
    }
  
    let finalDays: Array<DayFinal> = [];
    // give each day a date starting with the first available date that 
    // matches the specified day. If day not recognised, error
    combinedDaysRaw.forEach((day: Day) => {
        if (day != null) { //don't date empty days
            let finalDay: DayFinal = new DayFinal;
            finalDay.Sessions = day.Sessions;

            finalDay.Dated = (day.DayName != null);
            finalDay.Date = new Date(date);
            
            finalDays.push(finalDay);
        }

        //increment (including if empty day)
        if (reverse) {
            date.setDate(date.getDate() - 1);
        } else {
            date.setDate(date.getDate() + 1);
        }
    });
    
    let finalR: flattenParseT = {Days: finalDays, ExtraDays: extraDays, Dated: dated, Metadata: periodFile.Metadata};

    return finalR;
}

export function sportStringToValidSport(str: string): ValidSport {
    let cStr = removeBoth(str.toLowerCase());

    switch (cStr) {
        case 'swimming': case 'swim': case 'pool':
            return ValidSport.Swimming;
        case 'cycling': case 'cycle': case 'bike': case 'biking':
            return ValidSport.Cycling;
        case 'running': case 'run':
            return ValidSport.Running;
        case 'triathlon': case 'tri':
            return ValidSport.Triathlon;
        case 'duathlon':
            return ValidSport.Duathlon 
        case 'walking': case 'walk':
            return ValidSport.Walking;
        case 'gym': case 'strength': case 'strength training':
            return ValidSport.Gym;
        case 'other':
            return ValidSport.Other;
        case 'note':
            return ValidSport.Note;
        default:
            throw new Error("Invalid sport " + cStr);
    }
}

export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   

export function removeSpeechMarks(str: string): string {
    return str.replace(/"/g, '');
}

export function removeBrackets(str: string): string {
    return str.replace(/[()]/g, '');
}

export function removeBoth(str: string): string {
    return removeSpeechMarks(removeBrackets(str));
}

export function isValidDate(day: string): boolean {
    const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", 
    "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const lowercaseDay = day.toLowerCase();
    return daysOfWeek.includes(lowercaseDay);
}

export function isValidDateFormat(dateString: string): boolean {
    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
    return dateFormat.test(dateString);
}

export function stringToDate(dateString: string):Date {
    try {
        if (!isValidDateFormat(dateString)) {
            throw new Error('Invalid date format (' + dateString + '). Please use the format dd/mm/yyyy.');
        }


        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const date = new Date(year, month, day);

        if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
            throw new Error('Invalid date.');
        }

        return date;
    } catch (e) {
        throw e;
    }
}

export function stringToZone(inp: string): IntensityZone {
    let cInp = removeBoth(inp.toLowerCase())
    switch (cInp) {
        case 'hrz1': case 'heartratezone1':
            return IntensityZone.HRZ1
        case 'hrz2': case 'heartratezone2':
            return IntensityZone.HRZ2
        case 'hrz3': case 'heartratezone3':
            return IntensityZone.HRZ3
        case 'hrz4': case 'heartratezone4':
            return IntensityZone.HRZ4
        case 'hrz5': case 'heartratezone5':
            return IntensityZone.HRZ5

        case 'pwz1': case 'powerzone1':
            return IntensityZone.PWZ1 
        case 'pwz2': case 'powerzone2':
            return IntensityZone.PWZ2 
        case 'pwz3': case 'powerzone3':
            return IntensityZone.PWZ3 
        case 'pwz4': case 'powerzone4':
            return IntensityZone.PWZ4 
        case 'pwz5': case 'powerzone5':
            return IntensityZone.PWZ5 
        case 'pwz6': case 'powerzone6':
            return IntensityZone.PWZ6 
        case 'pwz7': case 'powerzone7':
            return IntensityZone.PWZ7 

        case 'ltz1': case 'lactatethresholdzone1':
            return IntensityZone.LTZ1
        case 'ltz2': case 'lactatethresholdzone2':
            return IntensityZone.LTZ2
        case 'ltz3': case 'lactatethresholdzone3':
            return IntensityZone.LTZ3

        default:
            throw new Error("Invalid intensity zone " + cInp);
            return null
    }
}

export function validTimeString(inp: String): boolean {
    const pattern = /^(\d+)(hours?|hrs?)?(\d+)?(mins?|minutes?)?$/;
    return pattern.test(inp.replace(/\s/g, '').toLowerCase());
}

export function DayDataToString(inp: Array<DayData>): string {
    var out: string = '';

    inp.forEach((_, i) => {
        if (inp[i].Sport != null) {
            out += inp[i].Sport + ": \n";
        }

        if (inp[i].Sections !== undefined) {
            inp[i].Sections.forEach(section => {
                if (section.Title != null) {
                    out += section.Title + ': \n';
                }
                section.Workloads.forEach(workload => {
                    if (workload.Load !== null) {
                        out += "load " + workload.Load + '\n';
                    }
        
                    if (workload.Notes !== null) {
                        out += '"' + workload.Notes + '"' + '\n';
                    }
        
                    for (let i = 0; i < workload.Repeats; i++) {
                        if (workload.Workload.Type == WLType.LessThan) {
                            out += workload.Workload.Time + "<" + intensityZoneProperties[workload.Workload.Zone[0]].name
                        } else if (workload.Workload.Type == WLType.GreaterThan) {
                            out += workload.Workload.Time + ">" + intensityZoneProperties[workload.Workload.Zone[0]].name
                        } else if (workload.Workload.Type == WLType.Between) {
                            out += workload.Workload.Time + " " + intensityZoneProperties[workload.Workload.Zone[0]].name + "-" +intensityZoneProperties[workload.Workload.Zone[1]].name
                        } else if (workload.Workload.Type == WLType.At) {
                            out += workload.Workload.Time + " " + intensityZoneProperties[workload.Workload.Zone[0]].name
                        } else if (workload.Workload.Type == WLType.None) {
                            out += workload.Workload.Time
                        }

                        out += '\n\n';
                    }
                })
            })
        }

        if (inp[i].Notes != null) {
            out += "Notes: \"" + inp[i].Notes + '"' + '\n';
        }

        out += '\n';
    })

    return out;
}

export function shortenString(str: string, maxLength: number) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    }
    return str;
}