// # Function Exercises

// ## Question One

// Write a function named double that takes in a number and returns that number times two
  
  function doubleNumber (number) {
   return number * number
 }

const doubleNumber= (number) => {return number * number}


## Question Two

Write a function named smallest that takes in two numbers and returns the smaller number

function smallestNumber (a,b) {
  if (a < b) {
    return a
  } else {
    return b
  }
}


const smallestNumber = (a,b) => {
  if (a < b) {
    return a
  } else {
    return b
}
}





## Question Three
Write a function named smallestValueInArr that takes in an array of numbers and returns the smallest number


function smallestValue(arr) {
  let smallestNumber = arr[0]
  for (let i =0;  i < arr.length; i++){
      if(arr[i] < smallestValue){
        smallestValue = arr[i]      
      }
  } 
  return smallestNumber
}

array1 = [4,5,8,9]
smallestValue(array1)



## Question Four

Write a function named occurrences that counts how many characters in a string match a specific character.


function occurences(string,letter){
  let count = 0
  for (let i = 0; i < string.length; i++){
       if(string[i] === letter){
      count ++
    }
  }
    return count
}

## Question Five

Write a function named average that returns the average of an array of numbers

function sumOfArray(arr){
  sum = 0
  for (let i =0; i <arr.length; i++)
  sum += arr[i]
  return Math.floor(sum/arr.length)
}




## Question Six

Write a function named frequencyMap that takes a string as input and returns an object that maps each character its number of occurrences

function frequencyMap(string1){

  let objMap = {}
 
   for(let i = 0; i < string1.length; i ++){
 
   if(!objMap[string1[i]]){
     objMap [string1[i]] = 1
 
     }
 
     if(objMap[string1[i]]){
       objMap [string1[i]] += 1
     }
 
 
   }
   return objMap
 
 }
 
 let string1 = "my name is mary"
 
 frequencyMap(string1)


 ## Question Seven

Write a function called fizzBuzz that logs the numbers from 1 to n as with the following replacements:

function fizzBuzz(n) {

  for (let i = 1; i < n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzBuzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else if (i % 5 === 0 ) {
    console.log('buzz')
  } else {
    console.log(i)
  }
  
  }
  }


  # Question Eight

Write a function named valueIsGreaterThanAverageOfArr that takes in an array of numbers and a number and returns whether the Double is greater than the average

  function arrayAverage (arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
      sum += arr[i]
      
    }
    return Math.floor(sum/arr.length)
  }
  
  function doubleNumber(num) {
    return num * num
  }
  
  function compareNumber(num1,num2) {
    return num1 > num2
  }
  

  ## Question Nine

Write a function that finds the second smallest Int an an array of Ints


function smallestNumber (number) {

  let smallest= number[0];
  let secondSmallest = []
  
  for(let i=0;i< number.length;i++){
   if(number[i]<smallest){
   secondSmallest = smallest;
     smallest = number[i];
   }else if(number[i] < secondSmallest) {
     secondSmallest = number[i];
   }
  }
  return secondSmallest
  }
  
  
  arr1 =[5,6,7,9,2]