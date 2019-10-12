// ## Question One

// Write a function named double that takes in a number and returns that number times two
function double(num){
  return num * 2
}
console.log(double(6))

// ## Question Two

// Write a function named smallest that takes in two numbers and returns the smaller number
function smallest(num1, num2){
  if (num1 < num2){
    return num1
  } else { return num2}
}
console.log(smallest(5,9))

// ## Question Three

// Write a function named smallestValueInArr that takes in an array of numbers and returns the smallest number

function smallestValueInArr(arr){
let smallestNum = arr[0]
for (let i = 0; i < arr.length; i++){
  if ( smallestNum > arr[i]){
    smallestNum = arr[i]
  }
}
return smallestNum
}
let testArr = [420, 860, 909, 1240]
console.log(smallestValueInArr(testArr))

// ## Question Four

// Write a function named occurrences that counts how many characters in a string match a specific character.
function occurrences(string,char){
  let charCount = 0 
  for (let i = 0; i < string.length; i++){
    if (string[i] === char){
      charCount++
    }
  }
  return charCount
}
let testString = "I'm going to input four of this char eeeeE"
console.log(occurrences(testString,"i"))

// ## Question Five

// Write a function named average that returns the average of an array of numbers

function average(arr){
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum / arr.length
}
console.log(average(testArr))

// ## Question Six

// Write a function named frequencyMap that takes a string as input and returns an object that maps each character its number of occurrences

function frequencyMap(string){
  let charFrequencey ={}
  for (let i = 0; i < string.length; i++){
    if(charFrequencey.hasOwnProperty(string[i])){
      charFrequencey[string[i]]++
    }else{
        charFrequencey[string[i]] = 1
      }
    
    }
    return charFrequencey
  }
console.log(frequencyMap(testString))

// ## Question Seven

// Write a function called fizzBuzz that logs the numbers from 1 to n as with the following replacements:
// - If the number if a multiple of 3, replace it with "Fizz"
// - If the number is a multiple of 5, replace it with "Buzz"
// - If the number is a multiple of 3 AND 5, replace it with "FizzBuzz"

function fizzBuzz(num){
  for (let i = 1; i <= num; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }else if( i % 3 === 0 ){
      console.log("Fizz")
    } else if (i % 5 === 0){
      console.log("Buzz")
    }else{
      console.log(i)
    }
  }
}
fizzBuzz(15)

// ## Question Eight

// Write a function named valueIsGreaterThanAverageOfArr that takes in an array of numbers and a number and returns whether the Double is greater than the average

function valueIsGreaterThanAverageOfArr(arr,num){
  if (double(num) > average(arr)){
    return true
  }else{
    return false
  }
}
console.log(valueIsGreaterThanAverageOfArr(testArr,90))

// ## Question Nine

// Write a function that finds the second smallest Int an an array of Ints

function secondSmallest(arr){
  let secondSmallestInt = Infinity
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < secondSmallestInt && arr[i] > smallestValueInArr(arr)){
      secondSmallestInt = arr[i]
    }
  }
  return secondSmallestInt
}
console.log(secondSmallest(testArr))