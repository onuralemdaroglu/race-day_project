let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = false;
const lateReg = true;
let runnerAge = 18;

let adultRunner = runnerAge > 18;
let youthRunner = runnerAge < 18;

if (adultRunner && earlyReg) { 
   raceNumber += 1000;
}; 

if (adultRunner && earlyReg) {
    console.log(`Your race number is ${raceNumber}. Your race will start at 9:30 AM.`);
} else if (adultRunner && lateReg) { 
    console.log(`Your race number is ${raceNumber}. Your race will start at 11:00 AM.`)
} else if (youthRunner) {  
  console.log(`Your race number is ${raceNumber} and youth registrants run at 12:30 PM.`)
} else { (runnerAge = 18) 
  console.log('You should see the registration desk!')
};

