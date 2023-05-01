function rot13(str) {
  let charCode = 0;
  let strArr = [];
  strArr = str.split(""); // ["a", "p", "p", "l", "e"]

  for (let i = 0; i < strArr.length; i++) {
    // get the ascii code of each char
    charCode = strArr[i].charCodeAt();
    // check if the code between capital alphabets codes
    if (charCode >= 65 && charCode <= 90) {
      // if greater then "M"
      if (charCode > 77) {
        charCode = charCode - 13;
      } else {
        charCode = charCode + 13;
      }

      strArr.splice(i, 1, String.fromCharCode(charCode));
    }
  }
  return strArr.join("");
}

console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP
