// Singleton
const myApp = new Object();

myApp.id = "12345";
myApp.name = "Archishmaan";
myApp.isLoggedIn = false;

// console.log(myApp);

const regularUser = {
  email: "uarchishmaan@yahoo.com",
  username: {
    fullname: {
      firstname: "Archishmaan",
      lastname: "Upadhyaya",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.username.fullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    name: "Archishmaan",
  },
  {
    id: 2,
    name: "Aayushmaan",
  },
];

const firstUserName = users[1].name;

console.log(Object.keys(myApp));
console.log(Object.values(myApp));
console.log(Object.entries(myApp));

console.log(myApp.hasOwnProperty("isLoggedIn"));

// Destructuring of Objects

const studentDetails = {
  id: 1,
  candidateName: "Archishmaan",
  training: "MEAN",
  currentCourse: "MERN",
};

const { id, candidateName: name, training, currentCourse } = studentDetails;
console.log(name);

// Props destructuring in React

const MyComponent = ({ destructure }) => {
  // blank
};

MyComponent((destructure = "check"));

// JSON

// {
//     "id": "4",
//     "name": "Archishmaan",
//     "age": "24",
// }
