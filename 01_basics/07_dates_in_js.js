let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // MOST IMPORTANT: Date is an object in JS.

let myCreatedDate = new Date(2024, 0, 23);
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2024, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // It gives the number of milliseconds since 1st January 1970.
console.log(myCreatedDate2.getTime()); // It gives the number of milliseconds since 1st January 1970.

console.log(Math.floor(Date.now() / 1000)); // It gives the number of seconds since 1st January 1970. MOST IMPORTANT: Interview question.

let myDate3 = new Date();
console.log(myDate3.getFullYear()); // It gives the year.
console.log(myDate3.getMonth()); // It gives the month. 0 based index.
console.log(myDate3.getDate()); // It gives the date.

// `${myDate.getDate()} and the time `

myDate.toLocaleString("default", {
  weekday: "long",
});
