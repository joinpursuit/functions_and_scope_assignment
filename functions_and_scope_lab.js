// # Function Exercises
//
// ## Question 1
//
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`

console.log("1._________________");

function larger (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater.`);
  } else if (num2 > num1) {
    console.log(`${num2} is greater.`);
  } else {
    console.log("These numbers are equal.")
  }
}

larger(2,5);
larger(11,3);
larger(44,44);


// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`

console.log("2._________________");

function dogYears (humanAge) {
  return humanAge * 7;
}

console.log(dogYears(4));
console.log(dogYears(25));


// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`

console.log("3._________________");

let array1 = [2,4,6,8];
let array2 = [5,10,15,20];

function arraySum (array) {
  let sum = 0;
  for (let i of array) {
    sum += i;
  }
  return sum;
}

console.log(arraySum(array1));
console.log(arraySum(array2));

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`

console.log("4._________________");

function numSum (num3, num4) {
  return num3 + num4;
}

console.log(numSum(14,5));
console.log(numSum(30,50));

// ## Question 5
//
// Write a function takes in any number grade and returns a corresponding letter grade.
//
// | Number Grade | Equivalent Letter Grade |
// | :--------: | :---------: |
// | 100 | A+ |
// | 90 - 99 | A |
// | 80 - 89 | B |
// | 70 - 79 | C |
// | 65 - 69 | D |
// | Below 65 | F |
//
//
// Example:
//
// Input: `88`
//
// Output: `"B"`

console.log("5._________________");

function gradeToLetter (grade) {
  if (grade >= 90){
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 65) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeToLetter(96));
console.log(gradeToLetter(83));
console.log(gradeToLetter(77));
console.log(gradeToLetter(69));
console.log(gradeToLetter(42));

// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`

console.log("6._________________");

function repeatLog (message, counter) {
  string = "";
  for (let int = 1; int <= counter; int++) {
    string += message;
  }
  return string;
}

console.log(repeatLog("*",5));
console.log(repeatLog("+",10));

// ## Question 7
//
// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n
//
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`


console.log("7._________________");

let array3 = [1,2,3,4,5,6,7,8,9,10];
let array4 = [2,4,6,8,10];

function first (arr, n) {
  return arr.slice(0, n+1);
}

console.log(first(array3, 2));
console.log(first(array4, 2));

// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//

console.log("8._________________");

function fizzBuzz (x) {
  for (let int2 = 1; int2 <= x; int2++) {
    if ((int2 % 3) === 0 && (int2 % 5) === 0){
      console.log("FizzBuzz");
    } else if ((int2 % 3) === 0) {
      console.log("Fizz");
    } else if ((int2 % 5) === 0) {
      console.log("Buzz");
    } else {
      console.log(int2);
    }
  }
}
fizzBuzz(5);
fizzBuzz(30);

// ## Question 9
//
// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`


console.log("9._________________");

let array5 = [7,8,9];

function reverse (a) {
  let blank = [];
  for (let x of a) {
    blank.unshift(x);
  }
  return blank;
}

console.log(reverse(array5));

// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
console.log("10._________________");

let input = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2];


function mostFrequent (ar) {
  let object = {};
  for (let through of ar) {
    if (object[through] === undefined) {
      object[through] = 1;
    } else {
      object[through]++;
    }
  } let theMostValue = -Infinity;
    let theMostKey = "";
  for (let go in object) {
    if (object[go] > theMostValue) {
      theMostValue = object[go];
      theMostKey = go;
    }
  }
  console.log(`${theMostKey} appears the ${theMostValue} times, which is the most.`)
}

mostFrequent(input);


// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88

console.log("11._________________");

let evenArray = [1,2,5,64,23,22,91,3];

function sumOfEven (arry) {
    let sum = 0;
  for (let int3 of arry) {
    if ((int3 % 2) === 0) {
      sum += int3;
    }
  }
    return sum;
}

console.log(sumOfEven(evenArray));

// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`

console.log("12._________________");

let spanishNumbers = {1: "uno", 5: "cinco"};

function flip (obj) {
  let newArr = {}
  for (let spanish in obj) {
    let number = spanish;
    let word = obj[spanish];
    let holder = number;
    number = word;
    word = holder;
    if (newArr[word] === undefined) {
      newArr[number] = word;
    }
  }
  return newArr;
}

console.log(flip(spanishNumbers));


// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`


console.log("13._________________");

let array6 = [13, 14, 44, 32, 19];


function isItInside (theArray, theNumber) {
  let theOtherArray = {};
  for (inside of theArray) {
    if (theOtherArray[inside] === undefined) {
      theOtherArray[inside] = 1;
    }
  }
  if (theOtherArray[theNumber] === undefined) {
    console.log(false);
  } else {
    console.log(true);
  }
}

isItInside(array6, 44);
isItInside(array6, 10);
