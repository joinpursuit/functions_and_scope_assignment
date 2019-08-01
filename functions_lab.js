console.log(`One`)
const largerNumber = (num1, num2) =>{
  if (num1 > num2){
    return num1
  } else if(num2 > num1){
    return num2
  }else{
    return num1
  }
}
console.log(largerNumber(19,23));

//

console.log(`Two`);
const dogYears = (num) =>{
    return num * 7
}

console.log(dogYears(4));

//

console.log(`Three`);
const arrSum = (arr) =>{
let sum = 0
  for(let i = 0; i < arr.length; i ++){
    sum += arr[i]
  } return sum
}
let arr = [13, 2, 4, -2]
console.log(arrSum(arr));

//

console.log(`Four`);
const addingBot = (num1, num2) =>  num1 + num2
console.log(addingBot(5,97));

//

console.log(`Five`);
const gradingBot = (num) =>{
  if (num === 100){
    return 'A +'
    }else if (num <= 99 && num >= 90){
    return 'A'
    }else if (num <= 89 && num >= 80){
    return 'B'
    }else if (num <= 79 && num >= 70){
    return 'C'
    }else if (num <= 69 && num >= 65){
    return 'D'
    }else{
    return 'F'
  }
}
console.log(gradingBot(93));

//

console.log(`Six`);
const repeatLog = (str,num) =>{
  let newStr = ''
  for (let i = num; i >= 1; i --){
    newStr += str
  }
  return newStr
}
console.log(repeatLog('*',13));

//

console.log(`Seven`);
const first = (num) =>{
  let newOutput = []
  for (let i = num; i >= 1; i--){
  newOutput.unshift(i)
  }
  return newOutput
}

console.log(first(3));

//

console.log(`Eight`);
const fizzBot = (num) =>{
  let fizzArr = []
  for (let i = 1; i <= num; i ++){
    if (i % 3 === 0 && i % 5 === 0){
        fizzArr.push('FizzBuzz')
    }else if (i % 5 === 0){
       fizzArr.push('Buzz')
    }else if (i % 3 === 0) {
       fizzArr.push('Fizz')
    }else{
      fizzArr.push(i)
    }
  }
  return fizzArr
}
console.log(fizzBot(15));

//

console.log(`Nine`);
reverseArr = []
const reverse = (arr) =>{
  for (let i = 0; i < arr.length; i ++){
    reverseArr.unshift(arr[i])
  }return reverseArr
}
console.log(reverse([3,1,4]));

//

console.log(`Ten`);
const freqBot = (arr) =>{
  let obj = {}
  let mostCommon;
  let mostCommonCount = 0
  for (let i = 0; i < arr.length; i ++){
    if (obj[arr[i]] === undefined){
      obj[arr[i]] = 1
    }else{
      obj[arr[i]] ++
    }
  }return obj
}
console.log(freqBot[4,4,4,6,5,5,5,5,5,5,7]);

//

console.log(`Eleven`);
let testArr= [1,2,5,64,23,22,91,3]
let sum = 0;
const arrAdder = (arr) =>{
  for (let i = 0; i < arr.length; i ++){
    if (arr[i] % 2 === 0){
      sum += arr[i]
    }
  }return sum
}
console.log(arrAdder(testArr));

//

console.log(`Twelve`);
let groceryObj = {
  Dairy: `Milk`,
  Meat : `Chicken`,
}
const flipBot = (obj) =>{
  let newObj = {}
  let newKeys = Object.keys(obj)
  let newValues = Object.values(obj)
  for (let i = 0; i < newValues.length; i ++){
    newObj[newValues[i]] = newKeys[i]
  }
return newObj
}
console.log(flipBot(groceryObj));

//

console.log(`Thirteen`);

const testBot = (arr,num) =>{
  let undecided;
  for (let i = 0; i < arr.length; i ++){
    if (num === arr[i]){
      undecided = true
      return undecided
    }else{
      undecided = false
    }
  }return undecided
}
let testArr2 = [1,4,6,9,10,7,99]
let testNum = 7

console.log(testBot(testArr2,testNum));
