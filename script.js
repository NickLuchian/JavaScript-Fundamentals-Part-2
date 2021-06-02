// JavaScript Fundamentals – Part 2

// activating strict mode (use always)
"use strict";

//example
let hasDriversLicense = false;
const passTest = true;

//if (passTest) hasDriverLicense = true; // NOTE!!!!!! value is not the same and without the strict mode it shows nothing to the console, with strict mode enableb in the console is seen error
//if (hasDriversLicense) console.log("I can drive");
//uncomment both lines to see result
//reserved words interface, private, if, etc. by strict mode

// Functions
function logger() {
  console.log("name is hulk");
}
logger(); // invoking the function, calling, running

function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // directly log in the console without variable

const appleOrangeJuice = fruitProcessor(4, 7);
console.log(appleOrangeJuice);

//function declaration vs. expressions
// in case of function declaration we can call it and the define it (in case of function expression it is not working) Example: const age1 = calcAge1(1991); before defining will work
function calcAge1(birthYear) {
  //const age = 2037 - birthYear;
  //return age;
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(calcAge1(1991));

//function expression
const calcAge2 = function (birthYear) {
  return 2038 - birthYear;
};
const age2 = calcAge2(2015);

console.log(age2);
console.log(age1, age2);
console.log(calcAge2(2015));

// arrow functions !easier and faster to write (no return keyword)  !does not support .this keyword
// const calcAge21 = function (birthYear) {
//   return 2038 - birthYear;
// };
const calcAge3 = (birthYear) => 2037 - birthYear; //one parameter and one line of code
const age3 = calcAge3(1991);
console.log(age3);

// const yearsUntilRetire = (birthYear) => {
//   // one parameter and more than 1 line of code
//   const age = 2037 - birthYear;
//   const retire = 65 - age;
//   return retire;
// };

//console.log(yearsUntilRetire(1991));

const yearsUntilRetire = (birthYear, firstName) => {
  // one parameter and more than 1 line of code
  const age = 2037 - birthYear;
  const retire = 65 - age;
  return `${firstName} retires in ${retire}`;
};

console.log(yearsUntilRetire(1991, "John"));

// Functions callig other functions

function cutFruits(fruit) {
  return fruit * 4;
}

function fruitProcessor1(apples, oranges) {
  //console.log(apples, oranges);
  const applePieces = cutFruits(apples);
  const orangePieces = cutFruits(oranges);
  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}
console.log(fruitProcessor1(2, 3));

// reviewing functions
const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetire1 = function (birthYear, firstName) {
  //in this case value from first parameter birthYear goes to birthYear from calcAge4 function
  const age = calcAge4(birthYear);
  const retire = 65 - age;

  if (retire > 0) {
    return retire;
  } else {
    //console.log("already");
    return -1; // this has no meaning
  }
  //return `${firstName} retires in ${retire}`;
};

console.log(yearsUntilRetire1(1991, "Hulk"));
console.log(yearsUntilRetire1(1970, "John"));

//Coding challenge (functions)

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log("no team wins");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(100, 50); //checkWinner function is independent and doesn't care about where the arguments came from

//test data 2

scoreDolphins = calcAverage(85, 54, 41); // reassing values that's why we used let instead of const
scoreKoalas = calcAverage(23, 34, 27); // reassing values that's why we used let instead of const
checkWinner(scoreDolphins, scoreKoalas);
