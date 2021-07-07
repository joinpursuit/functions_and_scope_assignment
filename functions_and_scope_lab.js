// # Function Exercises
//
console.log(`\n## Question 1`);
//
// Write a function that returns the largest of two numbers. If they are equal, return the second one.
//
// Example:
//
// Input: `12, 4`
//
// Output: `12`
const largeNum = (input1,input2) => {
    if (input1 > input2){
      return input1
        } else if (input1 < input2) {
            return input2
          } else {
                return input2
            }
}

let numResult = largeNum(4,9);
console.log(numResult);


console.log(`\n## Question 2`);
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`

const getDogAge = (ageInHuman) => {
  let ageInDog = 1;
    ageInDog = ageInHuman*7;
     return ageInDog
}
console.log(getDogAge(6));
console.log(`\n## Question 3`);
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`
let someArray = [7,9,100,4,7,1,8,5,90,200]
const arraySum =(arrIn) => {
  let sum =0;
    for (let i =0 ; i < arrIn.length; i++) {
          sum += arrIn[i]
    }
    return sum;
}
console.log (arraySum(someArray));
console.log(`\n## Question 4`);
//
// Write a function that takes in any two numbers and return their sum.
//
// Example:
//
// Input: `14, 5`
//
// Output: `19`
const sumTing =(numOne,numTwo) => {
  return numOne +numTwo
}
console.log(sumTing(9,9));
console.log(`\n## Question 5`);
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
const grades = (gradeNum) => {
    if (gradeNum === 100){
      return 'A+';
      } else if (gradeNum >= 90 && gradeNum <= 99){
            return 'A';
      }else if (gradeNum >= 80 && gradeNum <= 89){
            return 'B';
      } else if (gradeNum >=70 && gradeNum <= 79){
            return 'C';
      } else if (gradeNum >= 65 && gradeNum <= 69) {
            return 'D'
      } else if(gradeNum < 65 && gradeNum > 0){
            return 'F';
      } else {
        let str = 'That is not a valid grade'
            return str;
      }

}
console.log(grades(1));
// Example:
//
// Input: `88`
//
// Output: `"B"`
//
console.log( `\n## Question 6`);
//
// Implement a function named `repeatLog` that takes a string and a number as parameters. The function should log `message` `count` number of times.
//
// Example:
//
// Input: `"+", 10`
//
// Output: `++++++++++`
const repeatLog = (strParam, numParam) => {
    let str = '';
    for (let i=0; i < numParam; i++){
       str += strParam
    }
    return str;
}

console.log(repeatLog('+',10));

console.log(`\n## Question 7`);
//
// Write a function named `first` that takes a number and returns an array with all the numbers from 1 to n
//
//
// Example:
//
// Input: `first(3)`
//
// Output: `[1, 2, 3]`

function first(arrIn) {
    let arnold =[]
    for (let i = 1; i <= arrIn; i++){
      arnold.push(i);
    }
    return arnold;
}
console.log(first(10));
console.log(`\n## Question 8 `)
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
const fizzle = (numBuzz) => {
  let  i =1;
  while ( i <= numBuzz) {
    if (i % 3 ===0 && i % 5 ===0) {
      console.log('FizzBuzz')
    } else if (i % 3 ===0) {
      console.log('Fizz')
    } else if (i % 5 ===0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
    i++
  }
}
//invoking th function to print to the screen
fizzle(15);

console.log( `\n## Question 9`);
//
// Write a function named `reverse` that takes an array as a parameter. The function should return an array in reverse order.
//
//
// Example:
//
// Input: `reverse([1, 2, 3])`
//
// Output: `[3, 2, 1]`
let arrayReverse = [5,6,7,8,9]
function arrRever(inpt) {
  let newArray =[]
    for (let i =0; i<inpt.length; i++){
       newArray.unshift(inpt[i])
    }
    return newArray;
}
console.log(arrRever(arrayReverse));

console.log(`\n## Question 10`);
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
let freqArr=[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]
//
// Output: `2`
function frequentCall( numFreq) {
let count =0;
let objFreq ={};
let dupNum = '';
  for (let p = 0; p < numFreq.length; p++){
       let nums = numFreq[p]
       if (objFreq[nums] === undefined){
            objFreq[nums] = 1;
       } else {
            objFreq[nums] = objFreq[nums] +1 ;
       }
       if (objFreq[nums] > count){
              count = objFreq[nums];
              dupNum = numFreq[p];
       }
     }
  return `The most frequent number is ${dupNum}`;
}

console.log(frequentCall(freqArr));

//
console.log(`\n## Question 11`);
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
let arrInput =[6,11,12,5,8,24,36,9,15,23,99]

function sumEven(evenArray) {
  let total=0;
  for (let i=0; i< evenArray.length; i++){
    if (evenArray[i]%2===0){
          total += evenArray[i]
    }
  }
   return total
}
console.log(sumEven(arrInput));

console.log(`\n## Question 12`);
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
let funcObj= {
      1: 'uno',
      2: 'dos',
      6: 'seis',
}

const objFlip =(inptObj) =>{
  let reverse ={}
  for(let key in inptObj){
    reverse[inptObj[key]] =key
  }
  return reverse;
}

console.log(objFlip(funcObj));
console.log(`\n## Question 13`);
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
let yolo = [5,21,34,9,10,23]

function involved (involvedArr, val){
  let loko;
    for (let i=0; i< involvedArr.length; i++){
            loko = involvedArr.includes(val)
    }
    return loko
}
console.log(involved(yolo,6));
