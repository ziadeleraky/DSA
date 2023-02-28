const seekAndDestroy = (arr) => {
  const args = Array.from(arguments); // time-complexity: O(n) because we are looping through the arguments object to create an array
  const destroy = args[0].filter((item) => !args.includes(item)); // time-complexity: O(n^2) because we are looping through the array and then looping through the arguments array to check if the item is in the arguments array
  return destroy;
};

// time complexity: O(n^2)
// space complexity: O(n) 

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6, 4)); // [3, "hello"]
console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6, 4, 3)); // ["hello"]

// ========================================================

// refactored code using Set
const seekAndDestroy1 = (arr) => {
  // reduce the time complexity of the arguments array by using Set to create a new array with unique values
  const array = new Set(arr);
  // arguments is not an array, so we need to convert it to an array
  const args = Array.from(arguments);
  // console.log(array); // Set(6) {2, 3, 4, 6, "hello", 5}
  // filter the array and return the items that are not in the Set
  const newArr = args[0].filter(item => !array.has(item));
  return newArr;
};

console.log(seekAndDestroy1([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]