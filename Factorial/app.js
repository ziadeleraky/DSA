function Factorial(n) {
  if (n > 0) {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  } else {
    throw new Error("Enter Positive Number");
  }
}

console.log(Factorial(5));

// Big-O (Time Complexity) = O(n)