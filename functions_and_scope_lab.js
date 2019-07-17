// JOSEPH P. PASAOA
//


// function declarations

const spacer = () => {console.log("\n")}

// f.1
const whosLarger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// f.2
const getDogAge = (num1) => num1 * 7

// f.3
const arraySum = (arr) => {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// f.4
const sumOfTwo = (num1, num2) => num1 + num2;

// f.5
const grader = (num) => {
  if (num === 100) {
    return 'A+';
  } else if (num >= 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  } else if (num >= 70) {
    return 'C';
  } else if (num >= 65) {
    return 'D';
  } else if (num >= 0) {
    return 'F';
  } else {
    return 'Undeterminable: please check input';
  }
}

// f.6
const repeatLog = (str, num) => {
  let blast = str;
  for (let i = 1; i < num; i++) {
    blast += str;
  }
  return blast;
}

// f.7
const first = (num) => {
  let newArray = [1];
  for (let i = 1; i < num; i++) {
    newArray.push(i + 1);
  }
  return newArray;
}

// f.8
const bizzFuzzer = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz`);
    } else if (!(i % 3)) {
      console.log(`Fizz`);
    } else if (!(i % 5)) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
}

// f.9
const reverseIt = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

// f.10
const mostElemOfArr = (arr) => {
  let newObj = {};
  for (let i of arr) {
    if (newObj[i] === undefined) {
      newObj[i] = 1;
      // console.log(newObj); // debug
    } else {
      newObj[i] += 1;
      // console.log(newObj); // debug
    }
  }
  let topKey;
  let topKeyCount = 0;
  for (let key in newObj) {
    if (newObj[key] > topKeyCount) {
      topKey = key;
      topKeyCount = newObj[key];
    }
  }
  return topKey;
}

// f.11
const sumOfTheEvens = (arr) => {
  let sum = 0;
  for (let i of arr) {
    if (!Math.abs(i % 2)) {
      sum += i;
    }
  }
  return sum;
}

// f.12
const flipTheObject = (obj) => {
  let newArray = {};
  for (let key in obj) {
    newArray[obj[key]] = key;
  }
  return newArray;
}

// f.13
const isElemPresent = (arr, num) => {
  let present = false;
  for (let i of arr) {
    if (i === num) {
      present = true;
      break;
    }
  }
  return present;
}



// stage

// 1
console.log("1. Write a function that returns the largest of two numbers. If they are equal, return the second one.");
let labInput1a = 1;
let labInput1b = 4;
console.log(`${labInput1a}, ${labInput1b}`);

let result1 = whosLarger(labInput1a, labInput1b);
console.log(result1);
//
spacer();


// 2
console.log("2. Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.");
let labInput2 = 5;
console.log(`${labInput2} ->`);

let result2 = getDogAge(labInput2);
console.log(result2);
//
spacer();


// 3
console.log("3. Write a function `arraySum` that takes in an array and returns the sum of all the elements.");
let labInput3 = [4, 30, 200, 1000, -9];
console.log(labInput3);

let result3 = arraySum(labInput3);
console.log(result3);
//
spacer();


// 4
console.log("4. Write a function that takes in any two numbers and return their sum.");
let labInput4a = 60;
let labInput4b = -31;
console.log(`${labInput4a}, ${labInput4b}`);

let result4 = sumOfTwo(labInput4a, labInput4b);
console.log(result4);
//
spacer();


// 5
console.log("5. Write a function takes in any number grade and returns a corresponding letter grade.");
let labInput5 = 75;
console.log(labInput5);

let result5 = grader(labInput5);
console.log(result5);
//
spacer();


// 6
console.log("6. Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.");
let labInput6_str = "gamma";
let labInput6_num = 5;
console.log(`${labInput6_str}, ${labInput6_num}`);

let result6 = repeatLog(labInput6_str, labInput6_num);
console.log(result6);
//
spacer();


// 7
console.log ("7. Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n");
let labInput7 = 11;
console.log(labInput7);

let result7 = first(labInput7);
console.log(result7);
//
spacer();


// 8
console.log("8. Write a function that logs the numbers from 1 to x, except: mults of 3 log 'Fizz', mults of 5 log 'Buzz', mults of 3 & 5 log 'FizzBuzz'. Take in: x (the number to count up to).");
let x = 25;
console.log(`BIZZFUZZING: ${x}`);

bizzFuzzer(x);
//
spacer();


// 9
console.log("9. Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.");
let labInput9 = [8,7,6,5,-8,-7,-6,-5];
console.log(labInput9);

let result9 = reverseIt(labInput9);
console.log(result9);
//
spacer();


// 10
console.log("10. Write a function that prints out the most frequently occurring element in an array.");
let labInput10 = [2,1,4,2,5,2,3,23,0,0,0,0,0,0,0,0,0,0,3,3,2,2,2,24,56,2,2,5,46,2];
console.log(labInput10);

let result10 = mostElemOfArr(labInput10);
console.log(`${result10} is the most recurring element.`);
//
spacer();


// 11
console.log("11. Write a function that sums all the even numbers in an array.");
let labInput11 = [1,2,5,64,23,22,91,3];
console.log(labInput11);

let result11 = sumOfTheEvens(labInput11);
console.log(result11);
//
spacer();


// 12
console.log("12. Write a function that flips an object.  All of the keys are now values and all of the values are now keys.");
let labInput12 = {
  "uno": "red",
  "dos": "green",
  "tres": "blue",
  "quattro": "yellow",
  "cinco": "purple"
}
console.log(labInput12);

let result12 = flipTheObject(labInput12);
console.log(result12);
//
spacer();


// 13
console.log("13. Write a function that determines if a value is inside of array.");
let labInput13_arr = [1,2,5,64,23,22,91,3];
let labInput13_num = 91;
console.log(`${labInput13_arr} -> searching for: ${labInput13_num}`);

let result13 = isElemPresent(labInput13_arr, labInput13_num);
console.log(result13);
//
spacer();
