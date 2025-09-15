// 1. Non return
// 2. return
// 3. Non return + parameter
// 4. return + parameter

// 1. Non return
function greeting() {
  console.log("Hello Dara");
}

greeting()
// Output: Hello Dara

// 2.return
function num1() {
  return 5 + 10
}

console.log(num1())
// Output: 15

// 3. Non return + parameter
function username(name) {
  console.log(`Good evening ${name}`);
}
username("John")
// Output: Good evening John

// 4. return + parameter
function addition(num1, num2) {
  return num1 + num2
}

console.log(`10 + 20 = ${addition(10, 20)}`)
// Output: 10 + 20 = 30