const markHeight = 1.69;
const johnHeight = 1.95;
const markWeigt = 78;
const johnWeight = 92;

let markBMI = markWeigt / markHeight ** 2;
let jognBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > jognBMI;
console.log(markBMI, jognBMI, markHigherBMI);

// task1
if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}
// task2
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${jognBMI})!`);
}
