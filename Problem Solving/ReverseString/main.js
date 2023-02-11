function reverseString(str) {
  let rev = [];
  let count = 0;
  for (let i = str.length; i > 0; i--) {
    rev[count] = str[i - 1];
    count++;
  }
  return rev.join("");
}

// time complexity O(n) because we loop through the string once
// space complexity O(n) because we use an array to store the reversed string

// test
console.log("Rev1:", reverseString("ziad ahmed eleraky"));

// ------------------------------

function revString(str) {
  return str.split("").reverse().join("");
}
// time complexity O(n) because we loop through the string once and use reverse method
// space complexity O(n) because we use an array to store the reversed string and use split method to convert the string to an array

// test
console.log("Rev2:", revString("ziad"));

// ------------------------------

// using spread operator and reverse method and join method
const reverse = (str) => [...str].reverse().join("");
// time complexity O(n) because we loop through the string once and use reverse method
// space complexity O(n) because we use an array to store the reversed string and use spread operator to convert the string to an array

// test
console.log("Rev3:", reverse("ziad ahmed"));

// ------------------------------
