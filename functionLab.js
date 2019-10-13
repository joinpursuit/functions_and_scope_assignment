// //Question 1
function double(num) {
    return num * 2
}
console.log(double(2))

//Question 2
function smallest(num1, num2){
    if(num1 > num2){
        return num2
    } else {
        return num1
    }
}
console.log(smallest(10, 5))

//Question 3
array = [1,2,3,4,5,5]
function smallestValueInArr(array){
    let smallNum = 0
    for(let i = 0; i < array.length; i++){
         if (array[i]) {
        smallNum = array[i]

    } 
    }  
    return smallNum
} 
console.log(smallestValueInArr(array))

//Question 4
let myString = "Hello"
function occurences(string){
    for(let i = 0; i < myString.length; i++){
        if(string = myString[i]){
            let count = 0
            count ++
        } else {
            count = 0
            return count
        }
    }
}
console.log(occurences("l"))


//Question 5
let array1 = [1,2,3,4,5]

function averageArr(array1){
    let average = 0 // initailizing the average variable
    let sum = 0 // initailizing the sum variable
    for(let i = 0; i < array1.length; i++){ // looping through the array
        
     sum = sum + array1[i] //adding sum plus array index and saving the value in sum
    } 
    average = sum / (array1.length)
    return average
}
console.log(averageArr(array1))

//Question 6

function frequencyMap(myString){
    let mapChar = {}  //created the object
    for (let i = 0; i < myString.length; i++) {  //looping through the string
        if(mapChar.hasOwnProperty(myString[i])){  //checking to see if the key has a property inside the object
            mapChar[myString[i]]++  //if the key is inside the object we are adding one to its value
        }else {
            mapChar[myString[i]] = 1  //if the key isnt inside the object we are creating it and setting it to one
        }
        
        //count the keys (without repeating same char)
        
        //count how many times they occur save the value to respective key  
    }
    return mapChar
}

console.log(frequencyMap("average"))

//Question 7
    function fizzBuzz (n) {
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0){
                console.log("FIZZBUZZ")
            } else if(i % 3 === 0){
                console.log("Fizz")
            }else if (i % 5 === 0) {
                console.log("Buzz")
            }else {
                console.log(i)
            }
        }
    }

console.log(fizzBuzz(100))

// Question 8


function valueIsGreaterThanAverageOfArr(array, num) {
    let sum = 0
    for ( i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    let average = sum / array.length
    let x = num * 2
    if (average > x) {
        return "Average is greater than double"
    }else {
        return "Double is greater than average"
    }
}
console.log(valueIsGreaterThanAverageOfArr([1, 2, 3, 4, 5], 9))


//question 9

function secondsmallestInt(array){
    let smallestInt =  array[0]
    let secondSmallest = Infinity
    for( let i = 0; i < array.length; i++){
        if(array[i] < smallestInt){
            smallestInt = array[i]
        }
    }
    for( let i = 0; i < array.length; i++){
        if (array[i] > smallestInt && array[i] <= secondSmallest){
            secondSmallest = array[i]
        }
    }
    return secondSmallest
}

console.log(secondsmallestInt([1,3, 4, 5, 6, 2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]))