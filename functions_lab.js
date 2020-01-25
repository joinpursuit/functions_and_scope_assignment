//1.
function double(num){
    return num*2
}
//console.log(double(12))
//2.
function smallest(num1,num2){
    if (num1 > num2){
        return num2
    }
    else{
        return num1
    }
}
//console.log(smallest(35,15))
//3.
arr1 = [5,7,3,1,10,4,-1]
function smallestValueInArr(arr){
    let smallest = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[i+1]){
                smallest = arr[i]
                continue
        }
    }return smallest
}
//console.log(smallestValueInArr(arr1))