// let myName = "Archishmaan     "
// let mychannel = "fit     "

// console.log(myName.trueLength);

let myHeros = ["ironman", "spiderman"];

let heroPower = {
  thor: "lazer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.archies = function () {
  console.log(`Archishmaan is present in all objects`);
};

Array.prototype.heyArchies = function () {
  console.log(`Archishmaan says hello`);
};

// heroPower.archies()
// myHeros.archies()
// myHeros.heyArchies()
// heroPower.heyArchies()

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Archishmaan74     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"archishmaan".trueLength();
"iceTea".trueLength();
