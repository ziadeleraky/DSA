const palindrome = (str) => {
  const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g);
  return alphanumericOnly.join("") === alphanumericOnly.reverse().join("");
};

console.log(palindrome("_eye")); //true
console.log(palindrome("race car")); //true
console.log(palindrome("not a palindrome")); //false
