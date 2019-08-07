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
//

                 //parameter refereing to num1 and num 2
const largest =(num1, num2) => { // function is searching for the largest varibales
  if(num1 < num2){ // first requirement num1 < num2
  return num1 // print result num1
} if(num1 > num2){ // closing for if with curly brackets // 2req. num1 >num2
  return num1 // print result num1
} else if(num1 === num2) { // at last if the 3req. is true
   return num2 // print num2
 } // closing with curly brackets the 3 ifstat.
}
const resultOfLargest = largest(12,4)
console.log(resultOfLargest) // print in the value you want the function to use
// passing 12, 4 as arguments to the largest funtion



// ## Question 2
//
// Write a function named getDogAge that takes one argument: a dog's age in human years. The function returns the dog's age in dog years. The conversion rate is 1 human year to 7 dog years.
//
// Example:
//
// Input: `4`
//
// Output: `28`
const standardDogYear = 7 //set variable  b/c its 1 humanYear = 7 dogYear
const getDogAge = (humanYear) => { // placing human years into a function that will search for getDogAge
 return  humanYear * standardDogYear // print equation  4 * 7
  }
  const resultOfTotalDogYear = getDogAge(4)
console.log(resultOfTotalDogYear); // check varaible getDogAge and use the place holder(humanYear) and add the value 4 to the function


// ## Question 3
//
// Write a function `arraySum` that takes in an array and returns the sum of all the elements.
//
// Example:
//
// Input: `[13,2,4,-2]`
//
// Output: `17`

// i will need
// a forloop
// variable sum that += arr (the index number to )

const arraySum = (array) => { // declared variable in the function as array
let sum =0 // always start at 0 // asking to start at index o but without the [] b/c its a number we're working with
for(let i = 0; i < array.length; i++) { //use for loop b/c we're working with an array
sum += array[i] //equation formolating that
}
return sum // the command
}
console.log(arraySum([13,2,4,-2]));

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
const sumResult =(num5, num6) => { // function and the parameter
return num5 + num6 // print their sum
}
console.log(sumResult(14,5))// the info to evaluate

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

const letterGrade = (score) => {
  if(let score > 90 ) {
  return 'A';
} else if (let score > 80) {
  return 'B';
} else if(let score > 70) {
  return 'C';
} else if (let score > 65) {
  return 'D';
} else {
  return 'F';
}
console.log(letterGrade(80));

// Example:
//
// Input: `88`
//
// Output: `"B"`
//


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
//
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
//
// ## Question 8
//
// Write a function that logs the numbers from 1 to x, except:
//
// If the number if a multiple of 3, log `"Fizz"` instead of the number
// If the number is a multiple of 5, log `"Buzz"` instead of the number
// If the number is a multiple of 3 AND 5, log `"FizzBuzz"` instead of the number
// Your function should take in one parameter: x (the number to count up to)
//
//
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
//
let originalArr = [1,2,3,]

let newResult = []
for (let i = 0; i < originalArr.length-1; i--) {
newResult.push(originalArr[i])
return newResult
}
console.log(newResult(originalArr));

// ## Question 10
//
// Write a function that prints out the most frequently occurring element in an array.
//
// Example:
//
// Input: `[2,1,4,2,5,2,3,23,3,3,2,2,2,24,56,2,2,5,46,2]`
//
// Output: `2`
//
//
//
// ## Question 11
//
// Write a function that sums all the even numbers in an array.
//
// Example:
//
// Input: `[1,2,5,64,23,22,91,3]`
//
// Output: `88`
let fullarr = [1,2,5,64,23,22,91,3]
const sumAllEven = (arr4)=> {
for(let i = 0; i < fullarr.length; i++ )
//
// ## Question 12
//
// Write a function that flips an object.  All of the keys are now values and all of the values are now keys.
//
// Example:
//
// Input: `{1: "uno", 5: "cinco"}`
//
// Output: `{"uno": 1, "cinco": 5}`
// always consider looping throu objects
//adding keys use obj.4= "cuatro"
 let arrFlips= [1: uno, 5: cinco]
//


exmaples:
let obj= {
  1:"uno",
  3:"tres"
  5: "cinco"
  //for(let key in obj){
    const swapObj=(obj)=> {// creating a function
      let result={}// creating obj to push/place the new obj values
      for (let key in obj)//looping throu the obj
    result.obj[key] =// its directing to print the values of the keys (ex. "uno)")
  }
}
// ## Question 13
//
// Write a function that determines if a value is inside of array.
//
// Example:
//
// Input: `[1,4,6,9,10], 5`
//
// Output: `false`
let newPeople= []
let people = [
    {
        "firstName": "Calvin",
        "lastName": "Newton"
    },
    {
        "firstName": "Garry",
        "lastName": "Mckenzie"
    },
    {
        "firstName": "Leah",
        "lastName": "Rivera"
    },
    {
        "firstName": "Sonja",
        "lastName": "Moreno"
    },
    {
        "firstName": "Noel",
        "lastName": "Bowen"
    }
]


for(let i= 0; i < people.length; i++) {
console.log(people.firstname)
}
