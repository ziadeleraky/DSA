function isPowerOfTwo(num) {
  if (num < 1) {
    return false;
  }

  while (num > 1) {
    // If the current number is an even number then divide it by 2 till it becomes 2/2 = 1
    if (num % 2 === 0) {
      num /= 2;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(11));
console.log(isPowerOfTwo(6));

// Input size is reduced by half
// Big-O = O(logn)
