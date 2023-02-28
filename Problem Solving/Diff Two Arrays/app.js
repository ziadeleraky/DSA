function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    // if arr2 does not contain arr1[i] then push it to newArr
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    // if arr1 does not contain arr2[i] then push it to newArr
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

// time complexity: O(n^2)
// space complexity: O(n)

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]

// ========================================================

// Refactor using hash tables (Set)
function diffArr(arr1, arr2) {
  // create a set from each array to remove duplicates and
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  // get the difference between the two sets
  const diff1 = [...set1].filter((x) => !set2.has(x));
  const diff2 = [...set2].filter((x) => !set1.has(x));
  const newArr = [...diff1, ...diff2];
  return newArr;
}

diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]

// time complexity: O(n)
// space complexity: O(n)

// console.log(diffArr([1, 2, 3, 5], [1, 2, 3, 4, 5])) // [4]
