import { DayFinal, type Day, type Period, type PeriodFile, ValidSport, IntensityZone } from "./DataTypes";

function dayNameToIndex(dayName: string): number {
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

function daysToWeek(days: Array<Day>): Array<Day> {
    var fullWeek: Array<Day> = Array(7).fill(null);
    days.forEach((day: Day) => {
        switch (day.DayName) {
            case "Mon":
                fullWeek[0] = day
                break;
            case "Tue":
                fullWeek[1] = day
                break;
            case "Wed":
                fullWeek[2] = day
                break;
            case "Thu":
                fullWeek[3] = day
                break;
            case "Fri":
                fullWeek[4] = day
                break;
            case "Sat":
                fullWeek[5] = day
                break;
            case "Sun":
                fullWeek[6] = day
                break;
            default:
                break;
        }
    });

    return fullWeek;
}

//I don't like this function... feels messy - Dylan
// flatten periods in a period file
export function flattenPeriods(periodFile: PeriodFile): Array<DayFinal> {
    let combinedDaysRaw: Array<Day | null> = [];
    let daysUntilFirst: number = 0;
    let firstNamedDayI: number = null;

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
                } else if (firstNamedDayI == null) {
                    daysUntilFirst++;
                }
            }
        }    
    }); 

    console.log(combinedDaysRaw);
    
    //start date
    let date: Date = new Date();
    let reverse: boolean = false;
    
    //trick code here - just fills the array in backwards for an end date ;)
    if (typeof periodFile.Metadata.End_Date === 'string') { 
        date = stringToDate(periodFile.Metadata.End_Date);
        reverse = true; 
        combinedDaysRaw.reverse();
    } else if (typeof periodFile.Metadata.Start_Date === 'string') { 
        date = stringToDate(periodFile.Metadata.Start_Date);
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

    console.log(finalDays);
    
    return finalDays;
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

        if (!isValidDate(dateString)) {
            throw new Error('Invalid date name (' + dateString + ').');
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
    return pattern.test(inp.replace(/\s/g, ''));
}