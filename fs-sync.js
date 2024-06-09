// const amount=1;
// if(amount<10){
//   console.log('small number')
// }
// else{
//   console.log('large number')
// }
// console.log(`hey its my first node app`)
// Tutorial 1---

// OS Module-------------------------------------------------------

// const os=require('os');
// // info about current user
// const user=os.userInfo()

// // Method returns the system uptime in seconds :
// console.log(`The system uptime is ${os.uptime()} seconds`)

// const currentOS={
//   name:os.type(),
//   release:os.release(),
//   totalMem:os.totalmem(),
//   freeMem:os.freemem(),
// }
// console.log(currentOS);

// ---------------------------------------------------------------------

// const path=require('path');
// console.log(path.sep )

// ---------------------------------------------------------

const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first},${second}`,
  { flag: "a" }
);
console.log("done with this text");
console.log("starting the next one");
