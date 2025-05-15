const promiseOne = new Promise((resolve, reject) => {
  // To do a async task
  // DB calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed!");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise is consumed!");
});

///////////////////////////////////////////////////////////
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2!");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Async 2 resolved!");
});
////////////////////////////////////////////////////////////
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Archishmaan", age: 24 });
  }, 3000);
});

promiseThree.then((user) => {
  console.log(user);
});

///////////////////////////////////////////////////////////
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Archies", age: 24 });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected finally!");
  });

///////////////////////      ASYNC-AWAIT     ////////////////////////
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ language: "javaScript", techtype: "front-end" });
    } else {
      reject("Error: For 5th Promise Something went wrong!");
    }
  }, 5000);
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive();

const getallUsers = async () => {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
};

getallUsers();

////////////////////////////// then-catch /////////////////////////////
fetch("https://dogapi.dog/api/v2/breeds")
  .then((data) => {
    return data.json();
  })
  .then((breed) => {
    console.log(breed);
  })
  .catch((error) => {
    console.log("E :", error);
  });
