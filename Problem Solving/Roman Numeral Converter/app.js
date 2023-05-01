const convertToRoman = (numToConvert) => {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  // Create an empty string for the result
  let result = "";

  // Loop through the numbers while the numToConvert is greater than the number, keep looping
  numbers.forEach((number, index) => {
    while (numToConvert >= number) {
      result += roman[index];
      numToConvert -= number;
    }
  });

  return result;
};

console.log(convertToRoman(2)); //II
console.log(convertToRoman(16)); //XVI
console.log(convertToRoman(97)); //XCVII
