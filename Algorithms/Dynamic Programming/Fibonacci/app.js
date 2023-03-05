// variables for testing the performance of the code
let operationsCounter = 0;
let counter = 0;

// legacy code for fibonacci
const oldFib = (n) => {
  counter++;
  if (n < 2) {
    return n;
  } else {
    return oldFib(n - 1) + oldFib(n - 2);
  }
};

// Dynamic Programming code for fibonacci
const fibonacci = () => {
  let cache = {};
  return function fib(n) {
    operationsCounter++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

// time complexity of the legacy code is O(2^n)
// time complexity of the Dynamic Programming code is O(n)

console.log(oldFib(20)); // 6765

const fib = fibonacci();
console.log(fib(20)); // 6765
console.log("No. of Operations before Dynamic Programming", counter); // 21891
console.log("No. of Operations after Dynamic Programming", operationsCounter); // 39
