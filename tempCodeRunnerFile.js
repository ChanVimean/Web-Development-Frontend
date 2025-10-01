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