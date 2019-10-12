function double(number) {
    return number * 2;
}
console.log(double(5))



function smallest(num1, num2) {
    if(num1 < num2){
        return num1
    } else {
        return num2
    }
}
console.log(smallest(5, 7))

function smallestValueInArr(arr) {
    let number = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < number) {
            number = arr[i]
        }
    } return number
 }
console.log(smallestValueInArr([5, 7, 10, 10000]));


function occurences(char, word) {
    let str = " "
    let count = 0
    for(i = 0 ; i <= word.length; i++){
        if(word[i] === char)
        count ++;   
        
    } 
    return count
} 
console.log(occurences("d", "Hello Worlddddddd"))

function average(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
        return sum/arr.length
}
console.log(average([80, 80, 90, 65]))


function frequencyMap(string) {
    let count = 0 
    let letter = string[0]
    for(let i = 0; i < string.length; i++ ){
        if(string[i] === letter){

        }
        count ++;
    } 
    return string[i] + count
}

console.log(frequencyMap("Pursuit in the house"))

// let  = {
//     " " : ,


// console.table(authorScores);


// function fizzBuzz(num) {
//     for(let i = 0; i < num.length; i++){
//         if(num % 3 === 0 && num % 5 === 0) {
//             return "fizzbuzz"
//         } else if( num % 3 === 0){
//             return "fizz"
//         } else if(num % 5 === 0) {
//             return "buzz"
//         }
//     }
// }
// console.log(fizzBuzz(num[i]))

