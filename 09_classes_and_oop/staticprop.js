class User {
  constructor(username) {
    this.username = username;
  }

  logUser() {
    console.log(`This user has logged in: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const Archies = new User("archies");
Archies.logUser();
// console.log(Archies.createId());

class Teacher extends User {
  constructor(username, empId) {
    super(username);
    this.empId = empId;
  }
}

const Abhijeet = new Teacher("abhijeet", "abhi@gmail.com");
Abhijeet.logUser();
// console.log(Abhijeet.createId());
