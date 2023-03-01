function isPrime(num) {
  if (num == 0 || num == 1) {
    return false;
  } else if (num == 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    // if num % less numbers != 0 => Number is Prime (Prime numbers only divided by itself)
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));

// Big-O (Time Complexity) = O(n)
