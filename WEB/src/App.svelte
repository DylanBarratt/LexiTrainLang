<!-- App.svelte -->
<script lang="ts">
import { ParseFull, ParseImports, ParseSession } from './lib/Antlr';
import type { PeriodFile, Session } from './lib/DataTypes';


let periodDat = `title: "chrim!bo".
author:"Dylan Barratt".

//this is a comment!

import base.

"week 1" {
Mon: (bike) 1hr HRZ1 note="cool bike yo",
Tue: {
      (run)
      "warmup" {60min HRZ1 - HRZ2}

      "main set" {
          2hours HRZ2 - HRZ3 &&
          1hours > HRZ2
      }

      "cool down" {
          60min HRZ1 - HRZ2
      }
  },
Wed: (run) 1hr hrz2,
Thu: (bike) 1hr HRZ2&&(run) 1hr HRZ2,
Fri: [base],
Sat: [base] && (run) 1hr30min HRZ2
}

"week 2"{
Mon: (run)1hr HRZ2 note="Chrimbo run!",
Tue:(bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
Wed: [base],
Thu: {
      (bike)
      warmup {
          1hr HRZ1
      }

      main {
          5*{
              5min HRZ5 &&
              5min HRZ3
          }
      }

      cooldown {
          30min HRZ1 - HRZ2
      }
  },
Fri: (bike) 2hr30min HRZ2,
Sat: (bike) 2hr HRZ2,
Sun: (run) 1hr30min HRZ2 && (bike) 1hr HRZ2
}

"week 3" {
Mon: note="10mile tt?",
Tue: (bike) 1hr30min HRZ2 && (run) 1hr HRZ2,
Wed: (bike) 2hr HRZ2,
Thu: (swim) 30min load=30 && (run) 1hr HRZ2,
Fri: (bike) 2hr30min HRZ2,
Sat: (bike) 2hr HRZ2 && (swim) 1hr load=40,
Sun: (run) 1hr30min HRZ2 && (bike) 1hr HRZ2
}

"week 2" {
5* {
      [base]
}
}`;

let sessionDat = `title: "base".
sport: "cycling".
author: "Dylan Barratt".
load: 30.

warmup {
	1hr > HRZ1
}

main {
	5*{
		5min HRZ5 &&
		5min HRZ3 - HRZ4
	} &&
  10min HRZ1 
} 

note="cooloff after hard set!!"
"cool down" {
	30min < HRZ2
}

"test" {
  30min
}`

console.log("Period:", periodDat);
console.log("Session:", sessionDat);

let sessionParse: Session;
try {
  sessionParse = ParseSession(sessionDat);
  console.log("Session parse: ", sessionParse);

  let fullParse: PeriodFile;
  try {
    fullParse = ParseFull(periodDat, {[sessionParse.Metadata.Title]: sessionParse});
    console.log("Metadata: ", fullParse.Metadata);
    console.log("Periods: ", fullParse.Periods);
  } catch (e) {
    console.error(e);
  }
} catch (e) {
  console.error(e);
}


</script>

