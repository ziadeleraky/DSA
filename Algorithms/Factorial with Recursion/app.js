// Factorial of a number using recursion
const factorial = (n) => {
  if (n <= 2) {
    return 2;
  }
  return n * factorial(n - 1);
};

// time complexity: O(n) - because we do n operations in the function
// space complexity: O(n) - because we are calling the function n times

// Test
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
