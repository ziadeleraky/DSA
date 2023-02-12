const array1 = [1, 32, 65, 898];
const array2 = [6, 54, 98, 637];

// solution 1: using the spread operator and the sort method
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
// time complexity: O(nlogn) because of the sort method which is O(nlogn) and the spread operator which is O(n) so the total time complexity is O(nlogn)
// space complexity: O(n) because of the spread operator which creates a new array

// test
console.log(mergeSortedArrays(array1, array2));

// ----------------------------------------------

// solution 2: using the concat method and the sort method
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// time complexity: O(nlogn) because of the sort method which is O(nlogn) and the concat method which is O(n) so the total time complexity is O(nlogn)
// space complexity: O(n) because of the concat method which creates a new array

// test
console.log(mergeSortedArrays(array1, array2));

// ----------------------------------------------
const array3 = [1, 32, 65, 898];
const array4 = [6, 54, 98, 637];
function mergeArrays(arr1, arr2) {
  const merged = [];
  let arrItem1 = arr1[0];
  let arrItem2 = arr2[0];
  let i = 1;
  let j = 1;
  while (arrItem1 || arrItem2) {
    if (arrItem1 < arrItem2) {
      merged.push(arrItem1);
      arrItem1 = arr1[i];
      i++;
    } else {
      merged.push(arrItem2);
      arrItem2 = arr2[j];
      j++;
    }
  }

  return merged;
}

console.log(mergeArrays(array3, array4));
