//Problem 1
const double = num => {
    return num*2
}
console.log(double(2))

//Problem 2
const smallest = (num1, num2) => {
    if(num1 < num2) {
        return num1
    } else if(num1 > num2) {
        return num2
    }
}
console.log(smallest(3, 2))

//Problem 3
const smallestValueInArr = arr => {
    let smallestValue = arr[0]
    for(let i =0; i < arr.length; i++) {
        if(smallestValue > arr[i]){
            smallestValue = arr[i]
        }
    }
    return smallestValue
}
console.log(smallestValueInArr([-4,-59,-348,-34,-4]))

//Problem 4
const occurrences = (inputOne,inputTwo) => {
    let freq=0
    for (let i=0;i < inputTwo.length; i++){
        if (inputOne === inputTwo[i]){
        freq++
        }
    }
    return freq
}
console.log(occurrences("l","hello"))

//Problem 5
const averageArr = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(averageArr([1,42,1,541,42,6]))

//Problem 6
const frequencyMap = string => {
    let object = []
    for ( i=0; i < string.length; i++){
        if (object[string[i]]) {
            object[string[i]] +=1
        } else {
            object[string[i]] = 1
        }
    }
    return object
}
console.log(frequencyMap("hello"))

//Problem 7 (*)

const fizzBuzz = n => {
    for (let i=0; i<=n ; i++)
    if (i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz") 
    } else if (i%3 === 0){
        console.log("Fizz")
    } else if (i%5 ===0){
        console.log("Buzz")
    } else {
        console.log(i)
    } 
}
fizzBuzz(60)

//Problem 8

const valueIsGreaterThanAverageOfArr = (num, arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    } avg = (sum/arr.length)
    if ((num*2) > avg){
        return true
    } else {
        return false
    }
}   
console.log(valueIsGreaterThanAverageOfArr(4,[1,2,3,4,5]))

//Problem 9

const smallestInteger = arr => {
    let smallest = arr[0]
    let smallest2 = arr[1]
    for (let i=0; i < arr.length; i++){
        if (smallest > arr[i]){
            smallest = arr[i]
        } else if (smallest2 > arr[i]){
            smallest2 = arr[i]
        }
    } return smallest2
}
console.log(smallestInteger([5,67,0,3,4,56]))