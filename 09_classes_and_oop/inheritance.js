class User {
  constructor(username) {
    this.username = username;
  }

  logUser() {
    console.log(`Username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, empID, password) {
    super(username);
    this.empID = empID;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const Archisha = new Teacher("archisha", 12343, "asdece");
const Gingka = new User("gingka");
Archisha.addCourse();
Gingka.logUser();

console.log(Gingka instanceof User);
