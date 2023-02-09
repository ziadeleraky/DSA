const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "a"];

// Compare the two arrays and return true if they have at least one value in common
function compareArrays(arr1, arr2) {
  const obj = {};
  // Loop through the first array and add the values to the object
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  // Loop through the second array and check if the values are in the object
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      return true;
    }
  }
  return false;
}
// time complexity: O(n)
// space complexity: O(n)

function compareArrays2(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
// time complexity: O(n^2)
// space complexity: O(1)
