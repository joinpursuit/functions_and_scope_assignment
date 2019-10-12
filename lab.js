console.log("Problem 1")

function double(num){
    return num *2
}

console.log(double(3))




console.log("Problem 2")

function smallest(num1, num2){
    let smaller = 0;
    if (num1<num2){
        smaller = num1
    } else{
        smaller = num2
    }
    return smaller
}
console.log(smallest(2.4,2.03))





console.log("Problem 3")

let input = [6,5,4,3,2,1];
function smallestValueInArr(input){
    let smaller = input[0];
    for(let i = 0; i < input.length; i++){
       if ( smaller < input[i]){
       }
        else {
            smaller = input[i]
        }
    }
    return smaller
}
console.log(smallestValueInArr(input))




console.log("Problem 4")

function occurences(letter, wordCount) {
    let count = 0;
    for (i = 0; i < wordCount.length; i++) {
        if (letter === wordCount[i]) {
            count++;
        }
    }
    return count
}
console.log(occurences("E", "cApItAlS aRe DiFfErEnT"))




console.log("Problem 5")

let array1 = [1,2,3,4,5]
let array2 = [1,42,1,541,42,6]
function average(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    } 
    return (sum/array.length)
}
console.log(average(array2))




console.log("Problem 6")

let string = "Today is a good day";
let object = {};
function frequencyMap(arr1) {
    for (i = 0; i < string.length; i++) {
        if (object[string[i]]) {
            object[string[i]] += 1
        } else {
            object[string[i]] = 1
        }
    }
    return object
}
console.log(frequencyMap(string))



console.log("Problem 7")

function fizzBuzz(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } 
        else {
            console.log(i)
        }
    }
}
fizzBuzz(1,27)

console.log("Problem 8")
let input2 = [1,2,3,4,5];
function valueIsGreaterThanAverageOfArr(input1, input2){
    let sum = 0;
    for (i = 0; i<input2.length; i++){
        sum += input2[i]
    };
    let avg = sum/input2.length;
    let double = input1 * 2; 
    console.log(double > avg ? "true" : "false");
}

valueIsGreaterThanAverageOfArr(1,input2)
