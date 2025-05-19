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
