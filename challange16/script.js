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
