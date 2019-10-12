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