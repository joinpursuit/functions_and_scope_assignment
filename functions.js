//Problem 1
function double(num){
    return num * 2
}

// Problem 2
function smallest(num1, num2){
    if (num1<num2){
        return num1
    } else
    return num2
}
console.log(smallest(1,2))

//Problem 3
let arr1 = [1.0,2,3,4,5,5]

function smallestValueInArr(arr){
    let smallest = arr[0]
    for (let i=0;i<arr.length;i++){
        if (smallest > arr[i])
        smallest = arr[i]
    }
    return smallest
} 
console.log(smallestValueInArr(arr1))

//Problem 4 
function occurrences(inputOne,inputTwo){
    freq=0
    for (let i=0;i < inputTwo.length; i++){
        if (inputOne === inputTwo[i]){
        freq++
        }
    }
    return freq
}

//Problem 5
let arr2 = [1,2,3,4,5]
function average(arr){
    sum=0
    for (i=0; i < arr.length; i++){
        sum +=arr[i]
    } 
    avg = sum / arr.length
    return avg
} 
console.log(average(arr2))

//Problem 6
//input: "hello", expectedOutput: {"h": 1, "e": 1, "l": 2, "o": 1}
function frequencyMap(string){
    let variable = string.split("")
    let object = {}
    for( let i = 0; i < variable.length; i++) {
        if(object[variable[i]]) {
            object[variable[i]] += 1
        } else {
            object[variable[i]] = 1
        }
    }     
    return object
}
console.log(frequencyMap("cat"))

//Problem 7
function fizzBuzz(num){
    for(let i = 0; i <= num; i ++) {
        if (i%3 === 0 && i%5 === 0) {
            console.log("FizzBuzz")
        } else if(i%3 ===0) {
            console.log("Fizz")
        } else if(i%5 ===0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(60)

//Problem 8
function valueIsGreaterThanAverageOfArr(num, arr) {
    for(let i = 0; i < arr.length; i++){
        let sum = 0
        sum += arr[i]
        avg = sum / arr.length
    } 
    let double = num * 2
    if(double > avg) {
        console.log("true")
    } else if ( double < avg) {
        console.log("false")
    }
}
valueIsGreaterThanAverageOfArr(2, [1.0,2,3,4,5])

//Problem 9
function secondSmallestInteger(arr){
    let smallest = arr[0]
    let secondSmallest = arr[1]
    for(let i = 0; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i]
        } else if (secondSmallest > arr[i]) {
            secondSmallest = arr[i]
        } 
    } console.log(secondSmallest)
}
secondSmallestInteger([40,253,680,750,64,126,4,471,706,757,899,856,617,169,697,755,36,426,973,107,299,360,201,313,801,61,241,911,992,354,108,341,170,949,333,937,933,512,568,379,995,29,637,417,793,763,47,387,166,135,259,400,406,141,271,194,263,171,992,508,953,176,990,544,491,488,691,406,911,751,519,732,907,403,328,110,348,669,112,719,852,671,447,619,928,847,630,711,371,143,277,405,210,266,241,379,265,213,331,780])