function getMiddleChars(word) {
    let index;
    if (word && word.length % 2) {
      index = word.length / 2;
      return word.substring(index, index + 1);
    } else {
      index = word.length / 2 - 1;
      return word.substring(index, index + 2);
    }
  }
  console.log(getMiddleChars('XYZ'));
  console.log(getMiddleChars('ABCD'));
  