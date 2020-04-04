//Question 1

const double = (num) => {
    return num * 2
}
console.log(double(4))

//Question 2

const smallest = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else if (num1 > num2) {
        return num2
    } else {
        return num1
    }
}
console.log(smallest(2.3 , 2.03))

//Question 3

let arr = [6,5,4,3,2,1]

const smallestValueInArr = (arr) => {
  return Math.min(...arr)
}
console.log(smallestValueInArr(arr))

//Question 4

let char = "E"
let count = 0

const occurrences = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(char)) 
    count ++
  }
    return count
}
console.log(occurrences("cApItAlS aRe DiFfErEnT"))

//Question 5

let arr = [1.5, 2.25, 4.5, -1.5]
let sum = 0

const average = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
    return sum / arr.length
}
console.log(average(arr))

//Question 6

const occurrences = (str) => {
    for (let i = 0; i < str.length; i++) {
      let obj = {}
      if (obj.hasOwnProperty(str[i])) {
        obj.str[i]
      } else {
        obj.str[i] = 1
      }
      return obj
    }
  }
  console.log(occurrences("cApItAlS aRe DiFfErEnT"))

  //Question 7

const frequencyMap = (str) => {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
      if (obj.hasOwnProperty(str[i])) {
        obj[str[i]]++
      } else {
        obj[str[i]] = 1
      }
    }
    return obj
}
  console.log(frequencyMap("hello"))

