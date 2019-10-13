// console.log("Problem 1")

// // function double(num){
// //     return num *2
// // }

// // console.log(double(3))

// const doubl = num => num *2
// console.log(doubl(7))


// console.log("Problem 2")

// // function smallest(num1, num2){
// //     let smaller = 0;
// //     if (num1<num2){
// //         smaller = num1
// //     } else{
// //         smaller = num2
// //     }
// //     return smaller
// // }

// const smallest = (num1,num2) => {
//     if (num1<num2){return `${num1} is smaller`}
//     else {return `${num2} is smaller`}
// }

// console.log(smallest(4,3))


// console.log("Problem 3")

// let input = [6,-1,5,4,3,2,1];

// const smallestNum = arry => {
//     let smaller = arry[0]
//     for (let i =0; i <arry.length; i++){
//         if (smaller < arry[i]){
//         }    else {
//             smaller = arry[i]
//         }
//     }
//     return smaller
// }
// console.log(smallestNum(input))









// // function smallestValueInArr(input){
// //     let smaller = input[0];
// //     for(let i = 0; i < input.length; i++){
// //        if ( smaller < input[i]){
// //        }
// //         else {
// //             smaller = input[i]
// //         }
// //     }
// //     return smaller
// // }
// // // console.log(smallestValueInArr(input))




// console.log("Problem 4")
// const occurences = (letter,words) => {
//     let count = 0;
//     for (let i = 0; i < words.length; i++){
//         if (letter === words[i]){
//             count ++;
//         }
//     }
//     return count
// }
// console.log(occurences("E", "cApItAlS aRe DiFfErEnT"))







// // function occurences(letter, wordCount) {
// //     let count = 0;
// //     for (i = 0; i < wordCount.length; i++) {
// //         if (letter === wordCount[i]) {
// //             count++;
// //         }
// //     }
// //     return count
// // }




// console.log("Problem 5")

// let inputAvg = [3,9,7,5,13]
// let input2= [4,3,3]
// let input3= [1,2]


// const average = arry => {
//     let sum =0;
//     for (let i =0; i < arry.length;i++){
//         sum += arry[i];
//     }
//     return sum/arry.length
// }
// console.log(average(input2))


// // let array1 = [1,2,3,4,5]
// // let array2 = [1,42,1,541,42,6]
// // function average(array) {
// //     let sum = 0;
// //     for (i = 0; i < array.length; i++) {
// //         sum += array[i]
// //     } 
// //     return (sum/array.length)
// // }

// // console.log(average(array2))




// console.log("Problem 6")
// let string1 = "Today is a good day";
// let object = {};


// const frequencyMap = string =>{
//     for (let i = 0; i < string.length;i++){
//         if (object[string[i]]){
//             object[string[i]] += 1;
//         }
//         else {
//             object[string[i]] =1
//         }
//     }
//     return object
// }

// console.log(frequencyMap(string1))





// // function frequencyMap(arr1) {
// //     for (let i = 0; i < string.length; i++) {
// //         if (object[string[i]]) {
// //             object[string[i]] += 1
// //         } else {
// //             object[string[i]] = 1
// //         }
// //     }
// //     return object
// // }
// // console.log(frequencyMap(string))



// console.log("Problem 7")
// const fizzBuzz = (num1,num2) =>{
//     for (i=num1; i<=num2;i++){
//         if (i%3===0 && i%5===0){
//             console.log("FizzBuzz!!!!!!!!!!!")
//         }
//         else if (i%3===0){
//             console.log("Fizz")
//         }
//         else if (i%5===0){
//             console.log("Buzz")
//         }
//         else {
//             console.log(i)
//         }
//     }
//     return fizzBuzz
// }

// console.log(fizzBuzz(1,16))
















// // function fizzBuzz(num1, num2) {
// //     for (let i = num1; i <= num2; i++) {
// //         if (i % 3 === 0 && i % 5 === 0) {
// //             console.log("FizzBuzz")
// //         } else if (i % 3 === 0) {
// //             console.log("Fizz")
// //         } else if (i % 5 === 0) {
// //             console.log("Buzz")
// //         } 
// //         else {
// //             console.log(i)
// //         }
// //     }
// // }
// // fizzBuzz(1,27)

// console.log("Problem 8")


// let inputTwo = [1,2,3,4,5]
// let inputOne = 1

// const valueIsGreaterThanAverageOfArr = (input1, input2)=>{
//     let sum =0;
//     for (let i =0; i < input2.length;i++){
//         sum += input2[i]
//     }
//     let avg = sum/input2.length;
//     let double1 = input1 *2;
// return double1>avg
// }

// console.log(valueIsGreaterThanAverageOfArr(inputOne,inputTwo))





// let input2 = [1,2,3,4,5];
// function valueIsGreaterThanAverageOfArr(input1, input2){
//     let sum = 0;
//     for (i = 0; i<input2.length; i++){
//         sum += input2[i]
//     };
//     let avg = sum/input2.length;
//     let double = input1 * 2; 
//     console.log(double > avg ? "true" : "false");
// }

// valueIsGreaterThanAverageOfArr(1,input2)


console.log("Problem 9")

let arr = [36,35,49,30,68,38,52,48,20,10]

const  secondSmallArr = input =>{
    let smallest = arr[0];
    let secondSmall = arr[0]; 
    for (let i=0; i<input.length;i++){
        if (smallest > arr[i]){
            secondSmall = smallest;       
            smallest = arr[i];
        }
    //     else if (arr[i] < secondSmall && arr[i]>smallest){  
    // }
}
return secondSmall
}
console.log(secondSmallArr(arr))

// console.log(`the smallest number in this Arry is ${smallestValueInArr(input3)}`)

// let input3 = [4,1,2,6]
// function secondSmallest (array){
//     let smallest = array[0];
//     let secSmallest = array[1];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < smallest){
//             smallest = array[i];
//             secSmallest = smallest;
//         }
//         else if (array[i] === secSmallest && array[i] > smallest){
//             secSmallest = array[i];
//         }
//     }
//     return secSmallest;
//   }
// console.log(secondSmallest(input3))




// console.log("class question even out arry")
// let input4 = [4,5,9,10,11];

// function evenReturn(arrinput){
//     let inputEven = [];
//     for (let i = 0; i <arrinput.length; i++){
//         if (arrinput[i] %2 ===0){
//             inputEven.push(arrinput[i])
//         }
//     }
//     return inputEven
// }
// console.log(evenReturn(input4))


// const sum = (num1,num2) => num1+num2;
// console.log(sum(1,4))

// const doublSquar = (num1) => {
//     let double = num1 *2;
//     let squar = double * double;
//     return squar
// }
// console.log(doublSquar(5))