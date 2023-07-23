function jumble(word, number) {
    // Check if number is between 1 and 1000
    if (number < 0 || number > 1000) {
      return "The number is not in range";
    }

    if (word == undefined) {
        return "Word is undefined";
    }
  
    // Convert word to lowercase
    word = word.toLowerCase().split('');
  
    for (let i = 0; i < word.length; i++) {
      if (word[i].match(/[a-z]/)) {
        let charCode = word[i].charCodeAt(0);
        charCode = ((charCode - 97 + number) % 26) + 97 ; // 'a'.charCodeAt(0) is 97
        word[i] = String.fromCharCode(charCode);
      } else if (!isNaN(parseInt(word[i])) || word[i] === ' ') {
        // Skip numbers and spaces, leave them unchanged
        continue;
      } else {
        // Remove any other characters
        word.splice(i, 1);
        i--;
      }
    }
  
    return word.join('');
  }

  module.exports = {
    jumble
  };
  