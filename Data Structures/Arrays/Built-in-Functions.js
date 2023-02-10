const strings = ["a", "b", "c", "d"];

//? Lookup (indexing)
// Access an element in an array by its index
strings[2];
// log: 'c'
// time complexity: O(1)
// space complexity: O(1)

//? Push
// Add to the end of the array
strings.push("e");
// log: ['a', 'b', 'c', 'd', 'e']
// time complexity: O(1) because we are not re-indexing the elements
// space complexity: O(1)

//? Pop
// Remove from the end of the array
strings.pop();
// log: ['a', 'b', 'c', 'd']
// time complexity: O(1) because we are not re-indexing the elements
// space complexity: O(1)

//? Unshift
// Add to the beginning of the array
strings.unshift("x");
// log: ['x', 'a', 'b', 'c', 'd']
// time complexity: O(n) because we have to re-index all the elements
// space complexity: O(1) because we are not creating a new array

//? insert (splice)
// Add to the middle of the array
strings.splice(1, 0, "ziad");
// log: ['x', 'ziad', 'a', 'b', 'c', 'd']
// time complexity: O(n) because we have to re-index all the elements
// space complexity: O(1) because we are not creating a new array

//? Delete (splice)
// Remove from the middle of the array
strings.splice(0, 2);
// log: ['a', 'b', 'c', 'd']
// time complexity: O(n) because we have to re-index all the elements
// space complexity: O(1) because we are not creating a new array

//? Slice
// Copy a portion of an array
strings.slice(2);
// log: ['c', 'd']
// time complexity: O(n) because we have to re-index all the elements
// space complexity: O(n) because we are creating a new array

console.log(strings); // ['a', 'b', 'c', 'd']
