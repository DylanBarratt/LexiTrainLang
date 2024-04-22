# Session File
A session file describes a single session in a training plan. 
It is imported as detailed [here](PeriodFile.md#importing-session-files).

A session file contains [metadata](#metadata) and a list of [sections](#sections)

A session file is saved with the `.slt` file extension. 
For example `run_base.slt`

## Metadata
*Metadata: information about the file*

The format for metadata is the same as in a [period file](PeriodFile.md#metadata). 

Metadata is written at the top of the session file and should include important  information about the session.
Metadata lines are made up of two parts. The tags and data. 
Tags are not case sensitive. 
Data must be in [WORD](Tokens.md#word) format

### Valid Metadata Tags
*(Different from period file tags)*

File name. Must match import name (`title`) <br>
Author (`author`) <br>
session's sport (`sport`) **(required, must be in [valid sport format](PeriodFile.md#supported-sports))**  <br>
session's load (`load`) <br>
Session notes (`note`) <br>

## Sections
A section is a named part of a session. For example the session warmup. 
The syntax is [WORD](Tokens.md#word) followed by `{}` containing the [section's contents](#section-content) and an optional note (`note=`[WORD](Tokens.md#word)).

### Section Content
A section is made up of [workloads](PeriodFile.md#workloads). 
Workloads are seperated by `&&`. 
Workloads can be repeated by surronding the workload with `{}` and writing [NUM](Tokens.md#num) `*` before. 
Workload example: <br>
`60min HRZ2`

Workload repeat example: <br>
`5*{3min HRZ5 && 5min < HRZ3}`


## Session Example
```
title: "run base".
sport: "running".
author: "Dylan Barratt".
load: 50.

warmup {
	15min HRZ1
}

main {
	45min < HRZ3
} 

note="include some strides"
"cool down w/ strides" {
	15min < HRZ2
}
```