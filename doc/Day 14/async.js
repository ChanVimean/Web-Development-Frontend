// ? Synchronous
const task1 = () => {
  console.log("Task 1");
};

const task2 = () => {
  console.log("Task 2");
};

const task3 = () => {
  console.log("Task 3");
};

task1();
task2();
task3();

// ? Asynchronous
const chore1 = () => {
  setTimeout(() => {
    console.log("Task 1 completed");
  }, 1000);
};

const chore2 = () => {
  setTimeout(() => {
    console.log("Task 2 completed");
  }, 2000);
};

const chore3 = () => {
  setTimeout(() => {
    console.log("Task 3 completed");
  }, 500);
};

chore1(); // Starts and waits 1s (in background)
chore2(); // Starts and waits 2s (in background)
chore3(); // Starts and waits 0.5s (in background)

// ? Syntax
async function Tasks() {
  console.log("logic...");

  const API = await "/http:ascaisc/bauiscba/scba";

  return API;
}
Tasks();

const Quests = async () => {
  console.log("logic...");

  const API = await "/http:ascaisc/bauiscba/scba";

  return API;
};
Quests();
