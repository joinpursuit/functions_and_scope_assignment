//Problem One

// function double(num) {
//     return num * 2
// }
// console.log(double(8));

//Problem Two

// function smallest(num1, num2) {
//  if(num1 < num2) {
//      return num1
//  } else {
//      return num2
//  }
// }
// console.log(smallest(11, 6))

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

function occurrences(character, string) {
    let num = 0;
    for(let i = 0; i < string.length; i++) {
        if(character === string[i]) {
            num++
        }
    }
    return num
}


console.log(occurrences("l", "hello"))
