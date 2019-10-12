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

function average(arr)