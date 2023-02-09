function Fibonacci(num) {
  let arr = [0, 1];
  // Won't execute the loop if num < 3, because of the intial value of i
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(Fibonacci(0));
console.log(Fibonacci(3));
console.log(Fibonacci(5));

// Big-O (Time Complexity) = O(n)