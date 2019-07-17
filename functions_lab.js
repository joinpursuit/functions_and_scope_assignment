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
console.log('----- Question 1 -----');
const compare = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(compare(300, 300));

// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years.
//The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
console.log('----- Question 2 -----');
const getDogAge = (age) => {
  return age * 7;
}

console.log(getDogAge(9));

// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
console.log('----- Question 3 -----');
let number = [1, 2, 3, 4, 5];
const arraySum = (array) => {
  let sum = 0;
  for (i = 0; i < number.length; i++) {
    sum += number[i];
  }

  return sum;
}
let total = arraySum(number);
console.log(total);

// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
console.log('----- Question 4 -----');

let negOneHundred = -100;
let eightyFive = 85;
const sum = (num1, num2) => {
  return num1 + num2;
}

console.log(sum(negOneHundred, eightyFive));

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
console.log('----- Question 5 -----');
const gradeConversion = (grade) => {
  if (grade === 100) {
    return "'A+'";
  } else if (grade > 89) {
    return "'A'";
  } else if (grade > 79) {
    return "'B'";
  } else if (grade > 69) {
    return "'C'";
  } else if (grade >= 65) {
    return '"D"';
  } else {
    return '"F"';
  }
}

console.log(gradeConversion(65));

// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
//
console.log('----- Question 6 -----');
let str = '';
const repeatLog = (string, num) => {
  for (let i = 0; i < num; i++) {
    str += string;
  }
};

repeatLog('~', 5);
console.log(str);

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
//
console.log('----- Question 7 -----');
let arr = [];
const first = (num) => {
  for (let i = 1; i <= num; i++) {
  arr.push(i);
}
  return arr;
}

console.log(first(5));
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//
console.log('----- Question 8 -----');
let max = 30;
const fizzbuzzChallenge = (end) => {
  for (let counter = 1; counter <= end; counter++) {
    if ((counter % 3) === 0 && (counter % 5) === 0) {
      console.log('Fizz Buzz');
    } else if ((counter % 3) === 0) {
      console.log('Fizz');
    } else if ((counter % 5) === 0) {
      console.log('Buzz');
    } else {
      console.log(counter);
    }
  }
}

 fizzbuzzChallenge(9);

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
//
console.log('----- Question 9 -----');
let newArray = [3, 1, 1994];
const reverse = (array) => {
return array.reverse();
}
let result = reverse(newArray);
console.log(result);

// ## Question 10
//
// Write a function that prints out the most frequent  element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
//
console.log('----- Question 10 -----');

// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
//
console.log('----- Question 11 -----');

// ## Question 12
//
// Write a function that flips a dictionary.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
//
console.log('----- Question 12 -----');

// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
console.log('----- Question 13 -----');
