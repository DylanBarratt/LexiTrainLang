# Period File
A period file is the main file in a LexiTrain training plan. The period file is used to describe all the training for the given training plan, split into different periods or [mesocycles](https://www.trainingpeaks.com/blog/macrocycles-mesocycles-and-microcycles-understanding-the-3-cycles-of-periodization/?utm_source=instagram&utm_medium=social&utm_content=image&utm_campaign=athlete2023_performance). 

A period file is made up of three parts. 
These are: [metadata](#metadata), [session imports](#importing-session-files), and [periods](#periods).

A period file is saved with a `.lt` file extension. 
For example: `meso_3.lt`

## Comments
Comments can be included in a period file with a `//`.
Any text after the `//` on the same line is ignored when the file is compiled.
Comments can be used to annotate parts of the code that only the author (or anyone with access to the source files can see).
### Example Comment
```//this is a comment! Hello World```

## Metadata
*Metadata: information about the file*
Metadata is written at the top of the period file and should include important  information about the session.
Metadata lines are made up of two parts. The tags and data. 
Tags are not case sensitive. 
Data must be in [WORD](Tokens.md#word) format

### Valid Metadata Tags
File name (`title`)<br>
Author (`author`)<br> 
Date written (`date`)<br>
Starting date (`start_date`)<br>
Ending date (`date_date`)<br>

#### Training Plan Start Date
Both start and end date are not supported.
If no date is set, the first named day is in the period file and the start date is the next found instance of that named day from current date.
In the case that the period file contains no named days or any date metadata, the start day is the current day.

### Example Metadata
```
title: "over unders".
sport: cycling.
author: "Dylan Barratt".
```

## Importing Session Files
A [session file](SessionFile.md) describes a single workout in the training plan. 
It is written in a seperate file and must be imported at the top of the period file 
`import "session name".`
The keyword `import` must be lower case
The session name is a [WORD](Tokens.md#word).
The session import line is ended by a `.`

## Periods
A period is a week [(microcycle)](https://www.trainingpeaks.com/blog/macrocycles-mesocycles-and-microcycles-understanding-the-3-cycles-of-periodization/?utm_source=instagram&utm_medium=social&utm_content=image&utm_campaign=athlete2023_performance) in the training plan. It contains all the days to be completed that week
A period file can contain any non-zero number of periods. 
A period must be given a name using a [WORD](Tokens.md#word). 
The period's days are then written between `{}`

### Example Period
```
"week 1" {
	Tue: (bike) 4hr < HRZ3 note="long ride road",
	Wed: (swim) 30min load=20 note="swim lesson",
	Thu: [run_base],
	(swim) 1hr30min load=70 note="long swim",
	Sat: (swim) 1hr load=40 note="tech swim" && (bike) 1hr30min HRZ2,
}
```
In the example the period is named `week 1`

## Day Types
A day is one part of a period. It contains the sessions to be completed in that day. 
There are three types of days: <br>
**Specified** - A specified day is given a day of the week that it corresponds to. This day is a [WORD](Tokens.md#word) and must be in a specific format: <br>
(not case sensitive) <br>
Monday, Mon <br>
Tuesday, Tue <br>
Wednesday, Wed <br>
Thursday, Thu <br>
Friday, Fri <br>
Saturday, Sat<br>
Sunday, Sun <br>
Example: `Tue: (bike) 4hr < HRZ3 note="long ride road"`

**Unspecified** - An unspecified day is for the athlete to decide what day to complete the given set of sessions on. In compilation this is put in an any section
Example: `(swim) 1hr30min load=70 note="long swim"`

**Unspecified Loop** - An unsepcified loop is a repeat of unspecified days. For example if the athlete is to complete three one hour runs in a week it can be written as:
`3 * {(run) 1hr HRZ2}`

Days in a period are seperated by a comma (`,`) including the last day.

## Day Data
A day can contain multiple day data entries. For example two sessions. Day data is seperated with `&&`. 
Day data can be one of four types:

**Imported** - an imported session references one of the sessions imported at the top of the session file. The syntax is the imported name surronded by `[]`. Example: `[run_base]`

**Workout** - a workout is a single line session. This includes a [supported sport](#supported-sports), sytnatically `(WORD)` e.g. `(run)`; a session [workload](#workloads); an optional load `load=`[NUM](Tokens.md#num); and an optional note `note=` [WORD](Tokens.md#word). Example: `(bike) 4hr < HRZ3 load=140 note="long ride road"`

**Session** - a session is an inline version of a [session file](SessionFile.md) see that page for the syntax

**Notes** - a note is a place the author can tell the athlete something on a day. `note=`[WORD](Tokens.md#word)

## Supported Sports
(not case sensitive)
Swimming - 'swimming' 'swim' 'pool'
Cycling  - 'cycling' 'cycle' 'bike' 'biking'
Triathlon - 'triathlon' 'tri' 
Duathlon  - 'duathlon' 
Running - 'running' 'run'
Walking 'walking' 'walk'
Gym - 'gym' 'strength' 'strength training'
Other - 'other'
Note - 'note'

## Workloads
A workload is made up of duration and intensity. It is described by a [unit of time](#time-formats) and optionally a range from the [accepted zones](#zones).
The supported workloads are: 
**No intensity** - just a unit of time
**Less than** - `<` a zone
**Greater than** - `>` a zone
**Between** - zone `-` zone
**At** - unit of time zone

### Time Formats
*Case ignored, whitespace ignored*
[NUM](Tokens.md#num) hours/hour/hrs/hr
[NUM](Tokens.md#num) minutes/minute/mins/min

### Zones
*capitalisation ignored*
[**Power Zones**](https://www.trainingpeaks.com/blog/power-training-levels/)
PWZ1, PWZ2, PWZ3, PWZ4, PWZ5, PWZ6, PWZ7
Also valid formats: PowerZone1, ...

[**Heart Rate Zones**](https://journals.humankinetics.com/view/journals/ijspp/5/3/article-p276.xml)
HRZ1, HRZ2, HRZ3, HRZ4, HRZ5
Also valid formats: HeartRateZone1, ...

[**LT Zones**](https://journals.humankinetics.com/view/journals/ijspp/5/3/article-p276.xml)
LTZ1, LTZ2, LTZ3
Also valid formats: LactateThresholdZone1, ...

## Example Period File
```
//metadata
title: "IM meso 3".
author: "Dylan Barratt".

//session imports
import run_base.

//periods
"week 1" {
	Tue: (bike) 4hr < HRZ3 note="long ride road",
	Wed: (swim) 30min load=20 note="swim lesson",
	Thu: [run_base],
	Sun: (run) 2hr30min < HRZ3 note="long run"
}


"week 2" {
	Mon: note="Wow cool note!!",
	Wed: (tri) 60min load=60 note="Varsity Race!",
	Thu: [run_base],
	Fri: (swim) 1hr30min load=70 note="long swim",
	Sun: (run) 2hr30min < HRZ3 note="long run"
}

loop_week {
	3 * {(run) 1hr HRZ2}
}
```