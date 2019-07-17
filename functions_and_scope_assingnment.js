// // # Function Exercises
// //
// // ## Question 1
// //
// // Write a function that returns the largest of two numbers. If they are equal, return the second one.
// //
// // Example:
// //
// // Input: `12, 4`
// //
// // Output: `12`
function biggerAndSmaller(num1, num2){
  if (num1 > num2){
    console.log(`${num1} is bigger then ${num2}`);
  }else{
    console.log(`${num2} is bigger then ${num1}`);
  }
 }
biggerAndSmaller(12,4);
//
//
//
//
//
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
//
function getDogAge(age){
  let dogYear = age * 7;
  console.log(dogYear);
}
getDogAge(3);
//
//
//
// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
let newArray = [13,2,4, -2]

function arraySum(array){
  let sum = 0;
  for(i = 0; i < array.length; i ++){
    sum += array[i];
  }
  console.log(sum);

}


arraySum(newArray);
//
//
//
//
// ## Question 4
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
function sumFinder(sum1, sum2){
  let total = sum1 + sum2;
  return total;
}

console.log(sumFinder(3,4));


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
//
function gradeCalculator(grade){
  if (grade >=100){
    console.log("You recieved and A+");
  }else if (grade >= 90 && grade <= 99){
    console.log("You recieved and A");
  }else if (grade >= 80 && grade <= 89){
    console.log("You recieved and B");
  }else if (grade >=70 && grade <= 79){
    console.log("You recieved and C");
  }else if (grade >= 65 && grade <= 69){
    console.log("You recieved and D");
  }else if (grade <= 65){
    console.log("You recieved and F");
  }else{
    console.log("Please put in a number value");
  }
}

gradeCalculator("2");



// ## Question 6
//
// Implement a function named `repeatLog` that takes a string and a number as parameters.
//The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
function repeatLog(str, repeatX){
  for ( x = 1; x <= repeatX; x ++){
    console.log(`${str} ${x} number of ${repeatX} times`);
  }
}

repeatLog("This is message", 10);




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
function first(num){
  let up = [];
  for (y = 1; y <= num; y ++){
    up.push(y);
  }
  console.log(up) ;
}
first(3)



// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//
function fizzBuzz(fizz){
let z = 0;
  while (z <= fizz){
    //log numbers % 3
    if (z % 3 === 0 && z % 5 !== 0){// divisible by 3 and not 5{
      console.log("Fizz");
    }else if (z % 5 === 0 && z % 3 !== 0 ){//divisible by 5 and not 3{
      console.log("buzz");
    }else if (z % 5 === 0 && z % 3 === 0 ){//divisible by 5 and 3
      console.log("FizzBuzz");
    }else{
      console.log(z);
    }
    z ++;
  }
}

fizzBuzz(30)


// ## Question 9
//
// Write a function named `reverse` that takes an array as a parameter.
//The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`
let reverseArray = [1,2,3,4,5];

function reverse(array){
  let arrReverse = [];
  for(a = array.length-1; a >= 0; a--){
    arrReverse.push(array[a]);
    //console.log(a);
  }
  console.log(array);

  console.log(arrReverse);
}

reverse(reverseArray);

// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`

let input = [2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]

function repeating(rArray){
  let repeatNum = {};

  for( let num of rArray){
    if(repeatNum.hasOwnProperty(num)){
      repeatNum[num] += 1;
    }else{
      repeatNum[num] = 1;
    }
  }
  //console.log(repeatNum);
  let max = 0;
  let maxNum = 0;
  for (let num of rArray) {
    if (repeatNum[num] > max){
      maxNum = num;
    }
  }
  console.log(maxNum);
}

repeating(input);

// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
let array11 = [1,2,5,64,23,22,91,3];
//Output: 88;

function evenSum(numberArray){
  let evenTotal = 0;
  for(i = 0; i < numberArray.length; i++){
    if(numberArray[i] % 2 === 0){
      evenTotal += numberArray[i];
    }
  }
  console.log(evenTotal);
}

evenSum(array11);



// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
let jonathan = {name: "jonathan", age: 32, height: "6'0"};
//console.log(jonathan);

function objectFlip(objectFlip){
  let flippedObect = {};
   for(let key in objectFlip){
    flippedObect[objectFlip[key]] = key;
  }
    console.log(objectFlip);
    console.log(flippedObect);
  }

objectFlip(jonathan);

// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`

let array13 = [1,4,6,9,10];
function isIn(arrayInc,number){
  if  (arrayInc.includes(number)){
    return true;
  }else{
    return false;
  }
}

console.log(isIn(array13,5))
