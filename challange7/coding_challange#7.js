const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(`$ ${
  John.calcBMI() > Mark.calcBMI() ? John.fullName : Mark.fullName
} BMI
     (${
       John.calcBMI() >= Mark.calcBMI() ? John.calcBMI() : Mark.calcBMI()
     }) is higher then  ${
  John.BMI < Mark.BMI ? John.fullName : Mark.fullName
} (${John.calcBMI() < Mark.calcBMI() ? John.calcBMI() : Mark.calcBMI()}) ! `);
