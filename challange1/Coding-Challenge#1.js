const markHeight = 1.69;
const johnHeight = 1.95;
const markWeigt = 78;
const johnWeight = 92;

let markBMI = markWeigt / markHeight ** 2;
let jognBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > jognBMI;
console.log(markBMI, jognBMI, markHigherBMI);
