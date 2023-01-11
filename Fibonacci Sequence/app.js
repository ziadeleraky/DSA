let arr = [0, 1];

function Fibonacci(num) {
  if (num < 3) {
    return arr;
  } else {
    for (let i = 0; i < num; i++) {
      console.log(i);
      arr.push(arr[i] + arr[i + 1]);
      if (arr.length == num) {
        break;
      }
    }
    return arr;
  }
}

console.log(Fibonacci(8));
