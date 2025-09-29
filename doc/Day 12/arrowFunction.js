// ? Arrow Function =>

// ? 1. Function without parameters
// ? 2. Function with parameters
// ? 3. Function with return statement
// ? 4. Function return with parameters

///////////////////////////////////////////////////////////
// ? 1. Function without parameters
function sayHello() {
  console.log("Hello Node.js")
  console.log("Hello React.js")
}
sayHello();

// ! Overwrite existing function
// function sayHello() {
//   console.log("Goodbye")
// }
// sayHello()

const sayHello2 = () => {
  console.log("Good Evening John")
}
sayHello2();

// ! Not allowed to overwrite existing function
// const sayHello2 = () => {}

///////////////////////////////////////////////////////////

// ? 2. Function with parameters
function greet(name) {
  console.log("Hello " + name)
  console.log(`Good morning ${name}`)
}
greet("Dara")

const greetArrow = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`)
}
greetArrow("John", "Doe")
greetArrow("Doe", "John")

///////////////////////////////////////////////////////////

// ? 3. Function with return statement
function addition() {
  return 10 + 20
}
addition()
console.log("10 + 20 = " + addition());

const additionArrow = () => {
  return 30 + 40
}
console.log("30 + 40 = " + additionArrow());

///////////////////////////////////////////////////////////


// ? 4. Function return with parameters
function division(num1, num2) {
  return num1 / num2;
}
console.log("100 / 5 = " + division(100, 5));
console.log("100 / 5 = " + division(5, 100));

const multiplication = (num1, num2) => {
  return num1 * num2;
}
console.log("20 * 5 = " + multiplication(20, 5));
