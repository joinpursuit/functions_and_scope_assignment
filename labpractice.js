//Problem One

// function double(num) {
//     return num * 2
// }
// console.log(double(8));

//ES6
// const dbl = (num) => { 
//     return (num * num)
// }
// console.log(dbl(8))
//Problem Two

// function smallest(num1, num2) {
//  if(num1 < num2) {
//      return num1
//  } else {
//      return num2
//  }
// }
// console.log(smallest(11, 6))
   
const smallest = (num1, num2) => {
 if(num1 < num2) {
     return num1
 } else {
     return num2;
 }
}
console.log(smallest(20, -10));


//Problem Three

// function smallestValueInArr(arr) {
//     let smallestNum = Infinity
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < smallestNum) {
//          smallestNum = arr[i]//this is how you save a value to be compared to the newer value as it loops through the array
            
//         }
//     }

// return smallestNum
// } 

// console.log(smallestValueInArr([-4,-59,-348,-34,-4]));

//ES6

const sVIA = (arr) => {
    let small = Infinity
    
    for(let i = 0; i < arr.length; i++) {
    if(arr[i] < small){
       small = arr[i];
    }
    }
    return small;
    }
    console.log(sVIA([10,12,9,15,20]));

//Problem 4

// function occurrences(character, string) {
//     let num = 0;
//     for(let i = 0; i < string.length; i++) {
//         if(character === string[i]) {
//             num++
//         }
//     }
//     return num
// }


// console.log(occurrences("r", "okrrrrrr"))

//ES6

let occurrences = (character, string) => {
    let characterNum = 0;
    for(let i = 0; i < string.length; i++) {
        if(character === string[i]) {
            characterNum++
        }
    }
    return characterNum
}

console.log(occurrences("i", "Mississippi"));


//Problem 5

const average = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum/arr.length;
}
console.log(average([1,42,1,541,42,6]));