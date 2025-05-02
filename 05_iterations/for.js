// for loop

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(element);
// }

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element === 5) {
    console.log("Here is 5!");
  }
  console.log(element);
}

for (let i = 1; i < 5; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 1; j < 5; j++) {
    // console.log(`Inner loop: ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// for over array

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element);
}

// break and continue in for loop
// continue: skip the current iteration and move to the next one
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element === 3) {
    console.log("Found 3, skipping it.");
    continue;
  }
  console.log(element);
}

// break: exit the loop
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (element === 3) {
    console.log("Found 3, breaking the loop.");
    break;
  }
  console.log(element);
}
