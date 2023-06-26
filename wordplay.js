//WORDPLAY SOLUTIONS

//What are all of the words containing UU?

const uuWords = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].includes("UU")) {
    uuWords.push(words[i]);
  }
}
console.log(uuWords);

//What are all of the words containing an X and a Y and a Z?

const xyzWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
    xyzWords.push(word);
  }
}
console.log(xyzWords);

//What are all of the words containing a Q but not a U?

const qNotUWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.includes("Q") && !word.includes("U")) {
    qNotUWords.push(word);
  }
}
console.log(qNotUWords);

//What are all of the words that contain the word CAT and are exactly 5 letters long?

const catWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.includes("CAT") && word.length === 5) {
    catWords.push(word);
  }
}
console.log(catWords);

//What are all of the words that have no E or A and are at least 15 letters long?

const possibleWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (!word.includes("E") && !word.includes("A") && word.length >= 15) {
    possibleWords.push(word);
  }
}
console.log(possibleWords);

//What are all of the words that have a B and an X and are less than 5 letters long?

const bxWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.includes("B") && word.includes("X") && word.length < 5) {
    bxWords.push(word);
  }
}
console.log(bxWords);

//What are all of the words that both start and end with a Y?

const yyWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.startsWith("Y") && word.endsWith("Y")) {
    yyWords.push(word);
  }
}
console.log(yyWords);

//What are all of the words with no vowel and not even a Y?

const noVowelWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (!/[AEIOUY]/.test(word)) {
    noVowelWords.push(word);
  }
}
console.log(noVowelWords);

//What are all of the words that have all 5 vowels, in any order?

const allVowelWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    allVowelWords.push(word);
  }
}
console.log(allVowelWords);

//What are all of the words that have all 5 vowels, in alphabetical order?

const allVowelWordsInOrder = [];
const vowelWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    vowelWords.push(word);
  }
}
for (let i = 0; i < vowelWords.length; i++) {
  let aI = 0,
    eI = 0,
    iI = 0,
    oI = 0,
    uI = 0;
  const word = vowelWords[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (letter === "A") {
      aI = j;
    } else if (letter === "E") {
      eI = j;
    } else if (letter === "I") {
      iI = j;
    } else if (letter === "O") {
      oI = j;
    } else if (letter === "U") {
      uI = j;
    }
  }
  if (aI < eI && eI < iI && iI < oI && oI < uI) {
    allVowelWordsInOrder.push(word);
  }
}
console.log(allVowelWordsInOrder);

//How many words contain the substring "TYPE"?

const possibleWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.includes("TYPE")) {
    possibleWords.push(word);
  }
}
console.log(possibleWords.length);

//Create and print an array containing all of the words that end in "GHTLY"

const possibleWords = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.endsWith("GHTLY")) {
    possibleWords.push(word);
  }
}
console.log(possibleWords);

//What is the shortest word that contains all 5 vowels?

const allVowelWords = [];
let shortestWord;
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    allVowelWords.push(word);
  }
}
for (let i = 0; i < allVowelWords.length; i++) {
  shortestWord = allVowelWords[0];
  const word = allVowelWords[i];
  if (word.length < shortestWord.length) {
    shortestWord = word;
  }
}
console.log(shortestWord);

//What is the longest word that contains no vowels?

const noVowelWords = [];
let longestWord;
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    noVowelWords.push(word);
  }
}
for (let i = 0; i < noVowelWords.length; i++) {
  longestWord = noVowelWords[0];
  const word = noVowelWords[i];
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
console.log(longestWord);

//Which of the letters Q, X, and Z is the least common?

const possibleWords = [];
let qCount = 0,
  xCount = 0,
  zCount = 0;
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (letter === "Q") {
      qCount++;
    } else if (letter === "X") {
      xCount++;
    } else if (letter === "Z") {
      zCount++;
    }
  }
}
if (qCount < xCount && qCount < zCount) {
  console.log("Q is the least common");
} else if (xCount < qCount && xCount < zCount) {
  console.log("X is the least common");
} else if (zCount < xCount && zCount < qCount) {
  console.log("Z is the least common");
}

//What is the longest palindrome?

const palindromeWords = [];
let longestPalindrome;
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word === word.split("").reverse().join("")) {
    palindromeWords.push(word);
  }
}
for (let i = 0; i < palindromeWords.length; i++) {
  const word = palindromeWords[i];
  longestPalindrome = palindromeWords[0];
  if (longestPalindrome > word) {
    longestPalindrome = word;
  }
}
console.log(longestPalindrome);

//What are all of the letters that never appear consecutively in an English word? For example, we know that "U" isn't an answer, because of the word VACUUM, and we know that "A" isn't an answer, because of "AARDVARK", but which letters never appear consecutively?

const consecutiveLetters = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  for (let j = 0; j < word.length - 1; j++) {
    if (word[j] !== word[j + 1]) {
      continue;
    }
    if (!consecutiveLetters.includes(word[j])) {
      consecutiveLetters.push(word[j]);
    }
  }
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const nonConsecutiveLetters = [];
for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  if (!consecutiveLetters.includes(letter)) {
    nonConsecutiveLetters.push(letter);
  }
}
console.log(nonConsecutiveLetters);
