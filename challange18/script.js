const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const car1 = new Car("BMW", 120);
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is runing at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is runing at ${this.speed} km/h`);
};
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();
tesla.accelerate();
