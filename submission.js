const findSum = function(array) {
  // your code here - don't forget to return a number!
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }
  return num;
};

const findFrequency = function(array) {
  let result = {
    most: '',
    least: ''
  };
  let best_count = 0, least_count = array.length;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j])
            ++count;
    }
    if (count > best_count) {
        best_count = count;
        result.most = array[i];
    }
    if (count < least_count) {
        least_count = count;
        result.least = array[i];
    }
}
return result;
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
  let splitStr = str.split("");
  let reverseArray = splitStr.reverse();
  let joinArray = reverseArray.join("");
  let reverseStr = joinArray;
  if (str.toLowerCase() === reverseStr.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let count = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    let y = array[i + 1];
    if (count < x * y) {
      count = x * y;
    }
  }
  return count;
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
  let x = str.indexOf('(');
  let y = str.indexOf(')');
  let part = str.split('');
  for (let i = 0; i < part.length; i++) {
    if (part.indexOf(i) >= part.indexOf('(') && part.indexOf(i) <= part.indexOf(')')) {
      part.splice(part[i])
    }
  }
  let result = part.join('');
  return result;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  let score = 0;
  let one = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  let two = ['d', 'g'];
  let three = ['b', 'c', 'm', 'p'];
  let four = ['f', 'h', 'v', 'w', 'y'];
  let five = ['k'];
  let eight = ['j', 'k'];
  let ten = ['q', 'z'];
  split2 = str.split("");
  for (let i = 0; i < split2.length; i++) {
    if (one.includes(split2[i])) {
      score++;
    }
    if (two.includes(split2[i])) {
      score += 2;
    }
    if (three.includes(split2[i])) {
      score += 3;
    }
    if (four.includes(split2[i])) {
      score += 4;
    }
    if (five.includes(split2[i])) {
      score += 5;
    }
    if (eight.includes(split2[i])) {
      score += 8;
    }
    if (ten.includes(split2[i])) {
      score += 10;
    }
  }
  return score;
};

console.log(scoreScrabble('hello'));
