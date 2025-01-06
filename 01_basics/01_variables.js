const accountId = 232323; // Cannot be reassigned or redeclared
let emaiId = "archishmaan.upa4@gmail.com"; // Can be reassigned but NOT redeclared
var accountPassword = "Password";
accountCity = "Jaipur";
let accountState;

// accountId = 4 //not allowed in js
emaiId = "archishmaan@yahoo.com";
accountPassword = "1234";
accountCity = "Agra";

console.log(accountId);
console.log(emaiId);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

console.table([accountId, emaiId, accountPassword, accountCity, accountState]);
