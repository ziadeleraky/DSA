const seekAndDestroy = (arr) => {
  const args = Array.from(arguments);
  console.log(args); // [ [ 2, 3, 4, 6, 6, 'hello' ], 2, 6 ]

  const filterArr = (arr) => {
    // Return true if not in array
    return args.indexOf(arr) === -1;
  };

  return arr.filter(filterArr);
};

seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6);
// console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6)); // [3, 4, "hello"]
