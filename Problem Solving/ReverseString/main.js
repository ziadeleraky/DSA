// function to reverse a string
function reverseString(str) {
  let rev = [];
  let count = 0;
  for (let i = str.length; i > 0; i--) {
    rev[count] = str[i - 1];
    count++;
  }
  return rev.join("");
}

//? time complexity O(n) because we loop through the string once
//? space complexity O(n) because we use an array to store the reversed string

//! test
console.log(reverseString("ziad ahmed eleraky"));

// ------------------------------

function revString(str) {
  return str.split("").reverse().join("");
}
// time complexity O(n) because we loop through the string once
// space complexity O(n) because we use an array to store the reversed string

//! test
console.log(revString("ziad"));
