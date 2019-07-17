console.log(' ');
console.log('Question 1');
console.log(' ');

//Write a function that returns the largest of two numbers. If they are equal, return the second one.

const largestNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 === num2) {
    return num2;
  } else {
    return num2;
  }
}

console.log(largestNumber(4, 5));

console.log(' ');
console.log('Question 2');
console.log(' ');

//Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.

const getDogAge = (num) => {
  return num * 7;
}

console.log(getDogAge(15));

console.log(' ');
console.log('Question 3');
console.log(' ');

//Write a function `arraySum` that takes in an array and returns the sum of all the elements.

let someArray = [13, 2, 4, -2];

const arraySum = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(arraySum(someArray));

console.log(' ');
console.log('Question 4');
console.log(' ');

//Write a function that takes in any two numbers and return their sum.

const sumOfTwoNumbers = (num1, num2) => {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(14, 5));

console.log(' ');
console.log('Question 5');
console.log(' ');

//Write a function takes in any number grade and returns a corresponding letter grade.

const myLetterGrade = (num) => {

  if (num > 99) {
    return 'A+';
  } else if (num > 89) {
    return 'A';
  } else if (num > 79) {
    return 'B';
  } else if (num > 69) {
    return 'C';
  } else if (num > 64) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(myLetterGrade(88));

console.log(' ');
console.log('Question 6');
console.log(' ');

//Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.

const repeatLog = (message, count) => {

  let string = ' ';

  for (i = 0; i < count; i++) {
    string += message;
  }

  return string;
}

console.log(repeatLog('+', 10));

console.log(' ');
console.log('Question 7');
console.log(' ');

//Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n

const first = (num) => {
  let myArray = [];

  for (i = 0; i < num; i++) {
    myArray.push(1 + i);
  }

  return myArray;
}

console.log(first(6));

console.log(' ');
console.log('Question 8');
console.log(' ');

//Write a function that logs the numbers from 1 to x, except:

const fizzBuzz = (num) => {

  let string = ' ';

  for (i = 1; i <= num; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      string += 'FizzBuzz' + ' \n ';
    } else if (i % 3 === 0) {
      string += 'Fizz' + ' \n ';
    } else if (i % 5 === 0) {
      string += 'Buzz' + ' \n ';
    } else {
      string += i + ' \n ';
    }
  }

  return string;
}

console.log(fizzBuzz(100));

console.log(' ');
console.log('Question 9');
console.log(' ');

//Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.

let thisArray = [1, 2, 3];
console.log(thisArray);
const reverse = (array) => {
  let reversedArray = [];
  for (let value of array) {
    reversedArray.unshift(value);
  }

  return reversedArray;
}

console.log(reverse(thisArray));

console.log(' ');
console.log('Question 10');
console.log(' ');

//Write a function that prints out the most frequently occurring element in an array.

let madNumbers = [2, 1, 4, 2, 5, 2, 3, 23, 3, 3, 2, 2, 2, 24, 56, 2, 2, 5, 46, 2];

const mostFrequentElement = (array) => {

  let countedObject = {};
  let maxNumber = 0;
  let maxElement = 0;

  for (let value of array) {
    if (countedObject[value] === undefined) {
      countedObject[value] = 1;
    } else {
      countedObject[value]++;
    }
  }
  for (let key in countedObject) {

    if (countedObject[key] > maxNumber) {
      maxNumber = countedObject[key];
      maxElement = key;
    }
  }

  return maxElement;
}

console.log(mostFrequentElement(madNumbers));

console.log(' ');
console.log('Question 11');
console.log(' ');

//Write a function that sums all the even numbers in an array.

let awesomeArray = [1, 2, 5, 64, 23, 22, 91, 3];

const sumOfEvenNumbers = (array) => {
  let sum = 0;
  for (let value of array) {
    if (value % 2 === 0) {
      sum += value;
    }
  }

  return sum;
}

console.log(sumOfEvenNumbers(awesomeArray));

console.log(' ');
console.log('Question 12');
console.log(' ');

//Write a function that flips an object.  All of the keys are now values and all of the values are now keys.

let myObject = {
  1: 'uno',
  5: 'cinco',
};

const objectFlipper = (object) => {
  let flipper = ' ';
  let flippedObject = {};

  for (let key in object) {
    flippedObject[object[key]] = key;

  }
  // console.log(flippedObject);
  return flippedObject;
}

console.log(objectFlipper(myObject));

console.log(' ');
console.log('Question 13');
console.log(' ');

//Write a function that determines if a value is inside of array.

let checkedArray = [1, 4, 6, 9, 10];

const findValue = (num, array) => {
  let check = false;
  for (i = 0; i < array.length; i++) {
    if (num === array[i]) {
      check = true;
    }
  }

  return check;
}

console.log(findValue(5, checkedArray));
