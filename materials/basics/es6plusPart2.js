const numbers = [25, 62, 1, 7, 9, 10]

let [firstNumber, secondNumber, thirdNumber, ...restNumbers] = numbers

const person = {
  name: "John",
  job: "Designer",
  age: 27,
  hobbies: [
    "Gaming",
    "Reading the book"
  ]
}

let {name, age, job:personJob, ...restPersonObj} = person

const sumOfNumbers  = (prefix, ...nums)=>{
  let result = 0
  nums.forEach((item)=> result+=item)
  return `${prefix} ${result}`
}

console.log(firstNumber, secondNumber, thirdNumber, restNumbers)
console.log(name, age, personJob, restPersonObj)

console.log(sumOfNumbers("The Result is", 5,6,8))


let footballers = ["Ronaldo Nazario", "Rivaldo", "Kahn", "Ballack", "Totti"]

console.log(footballers)
footballers = ["Cristiano Ronaldo", ...footballers, "Messi"]

console.log(footballers)

let delpieroFootballer = {
  name: "Del Piero",
  age: 51,
  natoniality: "Italy"
}

console.log(delpieroFootballer)

delpieroFootballer = {
  ...delpieroFootballer,
  hairColor: "black",
  clubFootballs: ["Juventus"],
  name: "Alessandro Del Piero"
}

console.log(delpieroFootballer)