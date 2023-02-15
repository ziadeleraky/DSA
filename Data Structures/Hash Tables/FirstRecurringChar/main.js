// function that takes in an array and returns the first recurring character
function firstRecurringChar(array) {
  let obj = {};
  // loop through the array and add each element to the object as a key
  for (let i in array) {
    if (!obj[array[i]]) {
      obj[array[i]] = "single";
    } else {
      obj[array[i]] = "recurred";
    }
  }
  // loop through the object and return the first key that has a value of "recurred"
  for (let i in array) {
    if (obj[array[i]] === "recurred") {
      return array[i];
    }
  }
  return false;
}

// time complexity: O(n) because we are looping through the array once and then looping through the object once
// space complexity: O(n) because we are creating an object with the same length as the array

// test cases
console.log(firstRecurringChar([2, 3, 5, 9, 8, 1, 2])); //2
console.log(firstRecurringChar(["c", "a", "t", "d", "o", "g"])); //false
console.log(firstRecurringChar(["ziad", "mohamed", "mohamed", "ziad", "mohamed", "ziad"])); //ziad
