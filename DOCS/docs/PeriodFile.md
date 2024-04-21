# Period File
A period file is the main file in a LexiTrain training plan. The period file is used to describe all the training for the given training plan, split into different periods or [mesocycles](https://www.trainingpeaks.com/blog/macrocycles-mesocycles-and-microcycles-understanding-the-3-cycles-of-periodization/?utm_source=instagram&utm_medium=social&utm_content=image&utm_campaign=athlete2023_performance). 

A period file is made up of three parts. 
These are: [metadata](#metadata), [session imports](#importing-session-files), and [periods](#periods).

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
Data must be in [WORD](/Tokens#word) format

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
A [session file](/SessionFile) 

## Periods

## Day Types

## Supported Sports

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
```