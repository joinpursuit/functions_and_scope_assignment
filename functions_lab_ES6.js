//1.
const double = (num) =>{
    return num * 2
}

//2.
const smallest = (num1, num2) =>{
    if(num1 > num2){
        return num2
    }else{
        return num1
    }
}

//3.
const smallestValueInArray = (arr) =>{
    let smallest = Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

//4.
const occurences = (str, char) =>{
    let numOfOccur = 0
    for(i = 0; i < str.length; i++){
        if(str[i] === char){
            numOfOccur ++
        }
    }
    return numOfOccur
}
//5.
const average = (arr) => {
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return (total / arr.length)
}
//6.
  const frequencyMap = (str) => {
      let output = {};
      for (let i = 0; i < str.length; i++){
          let temp = str[i].toLowerCase();
          if(temp === " "){
              continue;
          }
          if(output[temp]){
              output[temp]++
          } else {
              output[temp] = 1;
          }
      }
      return output;
  }
//7.