// function double(num) {
//     return num * 2
// }
// console.log(double(8));

// function smallest(num1, num2) {
//  if(num1 < num2) {
//      return num1
//  } else {
//      return num2
//  }
// }
// console.log(smallest(11, 6))

function smallestValueInArr(arr) {
    let smallestNum = Infinity
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNum) {
         smallestNum = arr[i]
            
        }
    }

return smallestNum
} 

console.log(smallestValueInArr([-4,-59,-348,-34,-4]));