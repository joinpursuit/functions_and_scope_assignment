// # Function Exercises

// ## Question One

// Write a function named double that takes in a number and returns that number times two
  
  function doubleNumber (number) {
   return number * number
 }


## Question Two

Write a function named smallest that takes in two numbers and returns the smaller number

function smallestNumber (a,b) {
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

