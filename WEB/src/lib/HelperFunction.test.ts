import { Day, DayData, DayFinal, ExtraDayT, IntensityZone, PeriodFile, PeriodMetadata, ValidSport, WLType, flattenParseT, } from "./DataTypes";
import { DayDataToString, dayNameToIndex, daysToWeek, flattenPeriods, shortenString, stringToZone, validTimeString } from "./HelperFunctions";

describe('Testing all helper functions', () => {
  describe('dayNameToIndex function', () => {
    test('days input', () => {
      expect(dayNameToIndex('sun')).toBe(0);
      expect(dayNameToIndex('ThU')).toBe(4);
      expect(dayNameToIndex('fail')).toBe(undefined);
    });
  });

  describe('daysToWeek function', () => {
    it('should return a full week array when given an array of days with no missing days', () => {
      const inputDays: Array<Day> = [
        { DayName: 'Mon', Sessions: null},
        { DayName: 'Tue', Sessions: null},
        { DayName: 'Wed', Sessions: null},
        { DayName: 'Thu', Sessions: null},
        { DayName: 'Fri', Sessions: null},
        { DayName: 'Sat', Sessions: null},
        { DayName: 'Sun', Sessions: null},
      ];
      const expectedOutput = inputDays;
  
      expect(daysToWeek(inputDays)).toEqual(expectedOutput);
    });
  
    it('should return a full week array with missing days filled as null', () => {
      const inputDays: Array<Day> = [
        { DayName: 'Mon', Sessions: null},
        { DayName: 'Wed', Sessions: null},
        { DayName: 'Fri', Sessions: null},
      ];
      const expectedOutput: Array<Day> = [
        { DayName: 'Mon' , Sessions: null},
        null,
        { DayName: 'Wed' , Sessions: null},
        null,
        { DayName: 'Fri' , Sessions: null},
        null,
        null,
      ];
  
      expect(daysToWeek(inputDays)).toEqual(expectedOutput);
    });
  
    it('should handle extra days beyond Sunday by adding them to the end of the array', () => {
      const inputDays: Array<Day> = [
        { DayName: 'Mon', Sessions: null},
        { DayName: 'Tue', Sessions: null},
        { DayName: 'Wed', Sessions: null},
        { DayName: 'Thu', Sessions: null},
        { DayName: 'Fri', Sessions: null},
        { DayName: 'Sat', Sessions: null},
        { DayName: 'Sun', Sessions: null},
        { DayName: 'E1', Sessions: null},
        { DayName: 'E2', Sessions: null},
      ];
      const expectedOutput: Array<Day> = [
        { DayName: 'Mon', Sessions: null },
        { DayName: 'Tue', Sessions: null },
        { DayName: 'Wed', Sessions: null },
        { DayName: 'Thu', Sessions: null },
        { DayName: 'Fri', Sessions: null },
        { DayName: 'Sat', Sessions: null },
        { DayName: 'Sun', Sessions: null },
        { DayName: 'E1', Sessions: null },
        { DayName: 'E2', Sessions: null },
      ];
  
      expect(daysToWeek(inputDays)).toEqual(expectedOutput);
    });
  });

  describe('flattenPeriods function', () => {
    it('should return correct flattened periods when only metadata is specified', () => {
      const periodFile: PeriodFile = {
        Metadata: {Title: "test", Author: null, Date: null, Start_Date: null, End_Date: null},
        Periods: []
      };

      const metaOut: PeriodMetadata = {
        Title: "test", Author: null, Date: null, Start_Date: null, End_Date: null
      }

      const out = flattenPeriods(periodFile);
      expect(out.Metadata).toEqual(metaOut);
      expect(out.Dated).toEqual(false);
      expect(out.Days).toEqual([]);
      expect(out.ExtraDays).toEqual([]);
    });

    it('should return correct flattened periods when a period is given with a session', () => {
      const days: Array<Day> = [
        {DayName: null, Sessions: []},
        {DayName: null, Sessions: [
          {
            Sport: ValidSport.Cycling, 
            Sections: [
              {
                Title: "main", 
                Workloads: [
                  {
                    Load: null, 
                    Notes: "main set",
                    Workload: {Time: "1hr", Type: WLType.At, Zone: [IntensityZone.HRZ2]},
                    Repeats: 1,
                  }
                ]
              }
            ], 
            Notes: null
          }
        ]},
        {DayName: null, Sessions: []}
      ]
      const periodFile: PeriodFile = {
        Metadata: {Title: null, Author: null, Date: null, Start_Date: null, End_Date: null},
        Periods: [{Title: "Week1", Days: days}]
      };

      const metaOut: PeriodMetadata = {
        Title: null, Author: null, Date: null, Start_Date: null, End_Date: null
      }

      const daysOut: Array<DayFinal> = [];
      const extraDays: Array<ExtraDayT> = [
        {Period: 0, Sessions: []},
        {Period: 0, Sessions: [
          {
            Sport: ValidSport.Cycling, 
            Sections: [
              {
                Title: "main", 
                Workloads: [
                  {
                    Load: null, 
                    Notes: "main set",
                    Workload: {Time: "1hr", Type: WLType.At, Zone: [IntensityZone.HRZ2]},
                    Repeats: 1,
                  }
                ]
              }
            ], 
            Notes: null
          }
        ]},
        {Period: 0, Sessions: []}
      ];

      const out = flattenPeriods(periodFile);
      expect(out.Metadata).toEqual(metaOut);
      expect(out.Dated).toEqual(false);
      expect(out.Days).toEqual(daysOut);
      expect(out.ExtraDays).toEqual(extraDays);
    });
  });

  describe('stringToZone function', () => {
    it('should return the correct intensity zone for valid input strings', () => {
      expect(stringToZone('hrz1')).toBe(IntensityZone.HRZ1);
      expect(stringToZone('HRZ2')).toBe(IntensityZone.HRZ2);
      expect(stringToZone('pwz3')).toBe(IntensityZone.PWZ3);
      expect(stringToZone('LTZ1')).toBe(IntensityZone.LTZ1);
    });
  
    it('should throw an error for invalid input strings', () => {
      expect(() => stringToZone('invalid')).toThrow("Invalid intensity zone invalid");
    });
  });

  describe('validTimeString function', () => {
    it('should return true for valid time strings', () => {
      expect(validTimeString('1hr')).toBe(true);
      expect(validTimeString('2 hours')).toBe(true);
      expect(validTimeString('30mins')).toBe(true);
    });
  
    it('should return false for invalid time strings', () => {
      expect(validTimeString('')).toBe(false);
      expect(validTimeString('1bc')).toBe(false); 
      expect(validTimeString('1 minute 1 hour')).toBe(false); 
    });
  });

  describe('DayDataToString function', () => {
    it('should return an empty string when input array is empty', () => {
      const input: Array<DayData> = [];
      const result = DayDataToString(input);
      expect(result).toBe('');
    });
  
    it('should correctly convert DayData objects into string representation', () => {
      const input: Array<DayData> = [
        {
          Sport: ValidSport.Running,
          Sections: [
            {
              Title: 'Warm-up',
              Workloads: [
                {
                  Load: null,
                  Notes: 'Easy jog',
                  Repeats: 1,
                  Workload: { Type: WLType.None, Time: '10min', Zone: [] },
                },
              ],
            },
          ],
          Notes: 'easy run',
        },
        {
          Sport: ValidSport.Cycling,
          Sections: [
            {
              Title: 'Intervals',
              Workloads: [
                {
                  Load: null,
                  Notes: 'Hard effort',
                  Repeats: 5,
                  Workload: { Type: WLType.At, Time: '3min', Zone: [IntensityZone.HRZ5] },
                },
              ],
            },
          ],
          Notes: 'HARD!',
        },
      ];
  
      const expectedResult =
        'Run: \nWarm-up: \n"Easy jog"\n10min\n\nNotes: "easy run"\n\nCycle: \nIntervals: \n"Hard effort"\n3min HRZ5\n\n3min HRZ5\n\n3min HRZ5\n\n3min HRZ5\n\n3min HRZ5\n\nNotes: "HARD!"\n\n';
  
      const result = DayDataToString(input);
      expect(result).toBe(expectedResult);
    });
  });

  describe('shortenString function', () => {
    it('should return the original string if its length is within the maximum length', () => {
      expect(shortenString('abcdef', 10)).toBe('abcdef');
      expect(shortenString('abc', 3)).toBe('abc');
      expect(shortenString('', 5)).toBe('');
    });
  
    it('should shorten strings that exceed the maximum length', () => {
      expect(shortenString('This is a long string', 10)).toBe('This is...');
      expect(shortenString('A very long string that needs to be shortened', 20)).toBe('A very long strin...');
    });
  
    it('should handle maximum length being equal to or less than 3', () => {
      expect(shortenString('abcdef', 3)).toBe('...');
      expect(shortenString('12345', 3)).toBe('...');
      expect(shortenString('', 3)).toBe('');
    });
  });
  
});