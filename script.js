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

// ARRAYS
const friend1 = "Michael";
const friend2 = "John";
const friend3 = "Steve";

const friends = ["Michael", "John", "Steve"];
console.log(friends);

const years = new Array(1990, 1991, 1992);
console.log(years);

console.log(friends[0]); //by index
console.log(friends.length); //property
console.log(friends[friends.length - 1]); //in [] expression not statement

friends[2] = "Jay";
console.log(friends);

const firstName1 = "John";
const person = [firstName1, "Snow", 2037 - 1991, "teacher", friends];
console.log(person);

//exercise
function calcAge5(birthYear) {
  return 2037 - birthYear;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

//calcAge2(years1); it's not ok (NaN)
const age4 = calcAge5(years1[0]);
const age5 = calcAge5(years1[years1.length - 1]);
console.log(age4, age5);

const ages = [calcAge5(years1[0]), calcAge5(years1[years1.length - 1])];
console.log(ages);

//Basic arrays operations (methods)
const friends1 = ["Michael", "John", "Steve"];
console.log(friends1);
friends1.push("Jay"); // add element to the end of array
console.log(friends1);

friends1.unshift("Arnold"); //add element to the begining  of array
friends1.pop(); //remove last element
friends1.shift(); //remove first element

console.log(friends1.indexOf("Steve")); //find out the index of an element
console.log(friends1.includes("Bob")); //find out if the element is in array or not (strict equality)

if (friends.includes("John")) {
  console.log("friend John");
}

// Coding challenge (arrays)

function calcTip(bill) {
  return bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
  //console.log(`${tip} bucks`);
}
calcTip(100);

//using arrow function
//const calcTip = (bill) => bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// OBJECTS
const human = {
  firstName: "Jack", //key-value pairs  key=properties
  lastName: "Sparrow",
  age: 2037 - 1991,
  job: "pirate",
  friends: ["Bob", "Will", "Cap"],
};
console.log(human);
console.log(human.firstName); //. operator
console.log(human["firstName"]); //here we can use expession or compute the property name

const nameKey = "Name";
console.log(human["first" + nameKey]);
console.log(human["last" + nameKey]);

//example
const interestedIn = prompt(
  //return String
  "what do you want to know about human? Choose between firstName, lastName, age, job and friends"
);
console.log(human[interestedIn]);

if (human[interestedIn]) {
  //any string that is not empty and any number that is not zero are truthy values
  console.log(human[interestedIn]);
} else {
  console.log("value doesn't exist");
}

human.location = "Hawaii"; //dot. notation add new property
human["twitter"] = "@twitter"; //brackets notation add new property
console.log(human[interestedIn]);
console.log(human);

//challenge code
const s = `${human.firstName} has ${human.friends.length} friends, and his best friend is called ${human.friends[0]}`;
console.log(s);

//Object methods
const human1 = {
  firstName: "Jack", //key-value pairs  key=properties
  lastName: "Sparrow",
  birthYear: 1991,
  job: "pirate",
  friends: ["Bob", "Will", "Cap"],
  hasDriversLicense: true,
  //calcAge: function (birthYear) {
  //  return 2037 - birthYear;
  //},
  //calcAge: function () {
  //  console.log(this); //this is pointing to current object (it will retrieve the value from birthYear automaticaly) (!tip: hover over the this keyword to see the reference)
  //  return 2037 - this.birthYear;
  //},
  calcAge: function () {
    this.age = 2037 - this.birthYear; // in this case this.age add new property (age) to current object and assing it function value (.notation is exactly the same as human.location = "Hawaii";)
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver license`; //we use calcAge because we cannot assume that it was called before also use a ternary operator :)
  },
};

console.log(human1.calcAge());
console.log(human1["calcAge"]()); // to call any property using brackets we use the name of this property as a string
console.log(human1.age); // here we retrieve the already created property age with function value in it

//exercise
console.log(human1.getSummary());

//Coding challenge
const John = {
  fullName: "John Snow",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const Will = {
  fullName: "Will Smith",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(John.calcBMI()); //without this method call the property bmi won't be available
console.log(John.bmi);
console.log(Will.calcBMI());
if (Will.bmi > John.bmi) {
  console.log(
    `${Will.fullName} BMI (${Will.bmi}) is higher than ${John.fullName} BMI (${John.bmi})`
  );
} else {
  console.log(
    `${John.fullName} BMI (${John.bmi}) is higher than ${Will.fullName} BMI (${Will.bmi})`
  );
}

//Loops
//For loop
//console.log("Lifting weights repetition 1");
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//Looping arrays
const humanoid = [
  "Jack",
  "Sparrow",
  2037 - 1991,
  "pirate",
  ["Bob", "Will", "Cap"],
];
const types = [];

for (let i = 0; i < humanoid.length; i++) {
  //reading from humanoid
  const element = humanoid[i];
  console.log(element, typeof element);

  //filling types array
  types[i] = typeof element;
  //types.push(typeof element); //the same action off adding elements to array
}
console.log(types);

//example
const yearss = [1991, 2007, 1969, 2020];
const agess = [];
for (let i = 0; i < yearss.length; i++) {
  agess.push(2037 - yearss[i]);
}
console.log(agess);

//continue and break
console.log("---------ONLY STRINGS----------");
for (let i = 0; i < humanoid.length; i++) {
  if (typeof humanoid[i] !== "string") continue; //exit the current iteration
  console.log(i, humanoid[i], typeof humanoid[i]);
}

console.log("---------BREAK WITH NUMBER----------");
for (let i = 0; i < humanoid.length; i++) {
  if (typeof humanoid[i] === "number") break; //exit the whole iteration
  console.log(humanoid[i], typeof humanoid[i]);
}

//Looping backwards and loop in loop
const humanoid1 = [
  "Jack",
  "Sparrow",
  2037 - 1991,
  "pirate",
  ["Bob", "Will", "Cap"],
];

for (let i = humanoid1.length - 1; i >= 0; i--) {
  //(humanoid1.length - 1) == last element from array
  const element = humanoid1[i];
  console.log(i, element);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise number ${exercise} lifting weight repetition ${rep}`);
  }
}

//While loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // while loops does not really need a counter
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You roled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end......");
  }
}

console.log("---------------------Coding Challenge--------------------");

function calcTip1(bill) {
  return bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
}

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

for (let i = 0; i < bills1.length; i++) {
  const tip = calcTip1(bills1[i]);
  tips1.push(tip);
  totals1.push(tip + bills1[i]);
}
console.log(bills1, tips1, totals1);

function calcAverage1(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    //sum = sum + arr[index];
    sum += arr[index]; //the same
  }
  return sum / arr.length;
}
console.log(calcAverage1([1, 45, 546, 76, 8]));
console.log(calcAverage1(totals1));
console.log(calcAverage1(tips1));
