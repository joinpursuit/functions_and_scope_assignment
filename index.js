// ## Question 1
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
// Example:
// Input: `12, 4`
// Output: `12`

const largerNum = (a, b) => {
  if (a === b) {
    return b;
  }
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

largerNum(6, 9);

// ## Question 2
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
// Example:
// Input: `4`
// Output: `28`

const getDogAge = (age) => {
  return age * 7;
};

getDogAge(2);

// ## Question 3
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
// Example:
// Input: `[13,2,4,-2]`
// Output: `17`

const arraySum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// ## Question 4
// Write a function that takes in any two numbers and return their sum.
// Example:
// Input: `14, 5`
// Output: `19`

const sum = (a, b) => {
  return a + b;
};

sum(14, 5);

// ## Question 5
// Write a function takes in any number grade and returns a corresponding letter grade.
// | Number Grade | Equivalent Letter Grade |
// | :----------: | :---------------------: |
// |     100      |           A+            |
// |   90 - 99    |            A            |
// |   80 - 89    |            B            |
// |   70 - 79    |            C            |
// |   65 - 69    |            D            |
// |   Below 65   |            F            |
// Example:
// Input: `88`
// Output: `"B"`

const grade = (num) => {
  if (num >= 100) {
    return "A+";
  } else if (num > 89) {
    return "A";
  } else if (num > 79) {
    return "B";
  } else if (num > 69) {
    return "C";
  } else if (num > 65) {
    return "D";
  } else {
    return "F";
  }
};

grade(46);

// ## Question 6
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count`
// number of times.
// Example:
// Input: `"+", 10`
// Output: `++++++++++`

const repeatLog = (str, num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(str);
  }
  return arr.join("");
};

repeatLog("*", 4);

// ## Question 7
// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n
// Example:
// Input: `first(3)`
// Output: `[1, 2, 3]`

const first = (n) => {
  let num = 0;
  let arr = [];
  for (let i = 0; i < n; i++) {
    num += 1;
    arr.push(num);
  }
  return arr;
};

// ## Question 8
// Write a function that logs the numbers from 1 to x, except:
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)

const fizzBuzz = (x) => {
  let num = 0;
  for (let i = 0; i < x; i++) {
    num += 1;
    if (num % 5 === 0 && num % 3 === 0) {
      console.log(num, "fizzbuzz");
    } else if (num % 5 === 0) {
      console.log(num, "buzz");
    } else if (num % 3 === 0) {
      console.log(num, "fizz");
    } else {
      console.log(num);
    }
  }
};

// ## Question 9
// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.
// Example:
// Input: `reverse([1, 2, 3])`
// Output: `[3, 2, 1]`

const reverse = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

// ## Question 10
// Write a function that prints out the most frequently occurring element in an array.
// Example:
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
// Output: `2`

const mostOften = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  }
  let large = 0;
  let largeK = 0;
  for (let key in obj) {
    if (obj[key] > large) {
      large = obj[key];
      largeK = key;
    }
  }
  console.log(largeK);
};

// ## Question 11
// Write a function that sums all the even numbers in an array.
// Example:
// Input: `[1,2,5,64,23,22,91,3]`
// Output: `88`

const evenSum = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  let sum = newArr.reduce((acc, el) => {
    return acc + el;
  });
  return sum;
};

// ## Question 12
// Write a function that flips an object. All of the keys are now values and all of the values are now keys.
// Example:
// Input: `{1: "uno", 5: "cinco"}`
// Output: `{"uno": 1, "cinco": 5}`

const flipObj = (obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[obj[key]] = obj[key];
  }
};

// ## Question 13
// Write a function that determines if a value is inside of array.
// Example:
// Input: `[1,4,6,9,10], 5`
// Output: `false`

const findVal = (arr, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (b === arr[i]) {
      return true;
    }
  }
  return false;
};
