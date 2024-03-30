import { DayFinal, type Day, type Period, type PeriodFile, ValidSport } from "./DataTypes";

function dayNameToIndex(dayName: string): number {
    // Convert the day name to lowercase for case insensitivity
    var lowerCaseDayName = dayName.toLowerCase();

    // Define a map of day names to their indices
    var dayMap = {
        'sun': 0,
        'sunday': 0,
        'mon': 1,
        'monday': 1,
        'tue': 2,
        'tuesday': 2,
        'wed': 3,
        'wednesday': 3,
        'thu': 4,
        'thursday': 4,
        'fri': 5,
        'friday': 5,
        'sat': 6,
        'saturday': 6
    };

    // Look up the day index in the map
    return dayMap[lowerCaseDayName];
}

// flatten periods in a period file
export function flattenPeriods(periodFile: PeriodFile): Array<DayFinal> {
    let combinedDaysRaw: Array<Day> = [];
    let daysUntilFirst: number = 0;
    let firstNamedDay: string = null;

    // combine weeks into single array with missed days as null
    periodFile.Periods.forEach((period: Period) => { 
        let weekData: Array<Day> = Object.values(period.Days);

        //assumes 7 days a period
        for (let i = 0; i < 7; i++) {
            if ((typeof weekData[i] === 'undefined')) { 
                combinedDaysRaw.push(null);
            } else {
                combinedDaysRaw.push(weekData[i]);

                if (firstNamedDay == null && weekData[i].DayName != null) {
                    firstNamedDay = weekData[i].DayName;
                } else if (firstNamedDay == null) {
                    daysUntilFirst++;
                }
            }
        }
    }); 
    
    let date: Date = new Date();
    let reverse: boolean = false;
    
    if (typeof periodFile.Metadata.End_Date === 'string') { 
        date = stringToDate(periodFile.Metadata.End_Date);
        reverse = true; 
        combinedDaysRaw.reverse();
    } else if (typeof periodFile.Metadata.Start_Date === 'string') { 
        date = stringToDate(periodFile.Metadata.Start_Date);
    } 
  
    if (firstNamedDay != null) { //if null just start on today. date left as initialised
        let dateFound: boolean = false;
        while (!dateFound) {
            if (date.getDay() == dayNameToIndex(firstNamedDay)) {
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
        if (day != null) { //ignore empty days
            let finalDay: DayFinal = new DayFinal;
            finalDay.Sessions = day.Sessions;

            finalDay.Dated = (day.DayName != null);
            finalDay.Date = new Date(date);
            finalDays.push(finalDay);
        }

        if (reverse) {
            date.setDate(date.getDate() - 1);
        } else {
            date.setDate(date.getDate() + 1);
        }
    });

    return finalDays;
}

export function sportStringToValidSport(str: string): ValidSport {
    let cStr = removeBoth(str.toLowerCase());

    switch (cStr) {
        case 'swimming':
            case 'swim': case 'pool':
                return ValidSport.Swimming;
            case 'cycling': case 'cycle': case 'bike': case 'biking':
                return ValidSport.Cycling;
            case 'running': case 'run':
                return ValidSport.Running;
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