// Pattern 1: Square of stars

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Pattern 2: Right-angled triangle of stars

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Pattern 3: Inverted right-angled triangle of stars

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Pattern 4: Pyramid of stars

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "* ";
  }
  console.log(row);
}

// Psttern 5: Inverted pyramid of stars

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let k = 0; k <= i; k++) {
    row = row + " ";
  }
  for (let j = 0; j < 5 - i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

// Pattern 6: Diamond of stars

// Upper part of the diamond
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "* ";
  }
  console.log(row);
}

// Lower part of the diamond
for (let i = 3; i >= 0; i--) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + " ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + "* ";
  }
  console.log(row);
}

// Pattern 7: space and right-angled triangle of stars

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let k = 0; k < 5 - i; k++) {
    row = row + " ";
  }
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
