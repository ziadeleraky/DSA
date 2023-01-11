function isPowerOfTwo(num) {
  let powerOfTwo = 1;
  for (let i = 0; i < num; i++) {
    if (powerOfTwo == num) {
      return true;
    } else {
      powerOfTwo *= 2;
    }
  }
  return false;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(11));

// Big-O = O(n)
