// ? Basic Arrays

let car1 = "BMW";
let car2 = "Volvo";
let car3 = "Ferrari";

console.log(car1);
console.log(car2);
console.log(car3);

// ? index:     0       1         2
const cars = ["BMW", "Volvo", "Ferrari"];

// console.log(cars)
console.log(cars[0]);

cars.forEach((car) => console.log(car));

///////////////////////////////////////////////////////////

// ? Mixed Array

const Arrays = ["Yamha", 2020, true, null, undefined, 5050.5, -20.9];
Arrays.forEach((array) => console.log(array));

///////////////////////////////////////////////////////////
// ? Dictionary / Object: Key: Value
const students = { name: "John", age: 20, isActive: true };

console.log(students.name + " " + students.age + " " + students.isActive);
console.log(`${students.name} ${students.age} ${students.isActive}`);
console.log(students.age);
console.log(students.isActive);

///////////////////////////////////////////////////////////
