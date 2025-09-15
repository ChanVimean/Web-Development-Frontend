// Output
console.log("External JavaScript");

// Datatype
var name = "John";
console.log("Hello " + name);

var age = 20;
var isStudent = true;
var scores = [];

// Variables: var
var username = "John";
var age = 30;
console.log(username);
console.log(age);

var username = "Jane";
var age = 16;
console.log(username);
console.log(age);

// Variables: let
let firstname = "Tony";
console.log(firstname);

// let firstname = "Stark"

// Variables: const
let lastname = "Steve";
lastname = "Roger";

console.log(lastname);

const fullname = "Spiderman";
// fullname = "Superman"

console.log(fullname);
//***********************************************/

// if statement
let isTeacher = false;

// =   : assignment
// ==  : compare
// === : compare + datatype

if (isTeacher === true) {
  console.log("He is a teacher");
} else {
  console.log("He is not a teacher");
}

// const sellerName = "James"
// if (sellerName === "James") {

// }

// switch
let option = "Hello";

switch (option) {
  case 1:
    console.log("Option 1");
    break;
  case 2:
    console.log("Option 2");
    break;
  case 3:
    console.log("Option 3");
    break;
  default:
    console.log("Option not found");
    break;
}

// Loop: for loop
// for (start, end, increment/decrement) {
//    Logic...
// }
let num1 = 1;

for (num1 = 1; num1 <= 100; num1++) {
  console.log("Number " + num1);
}

let rows = 5; // number of rows for the pyramid

// Nested loop
for (let i = 1; i <= rows; i++) {
  let pyramid = "";

  // add spaces
  for (let j = 1; j <= rows - i; j++) {
    pyramid += " ";
  }

  // add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    pyramid += "*";
  }

  console.log(pyramid);
}

// while loop
let num2 = 1
while(num2 <= 10) {
  // num2 = num2 + 1
  // num2 += 1
  console.log(num2);
  num2++
}

// do while loop
let num3 = 0
do {
  console.log(num3);
  num3++;
} while(num3 <= 5);
//***********************************************/
