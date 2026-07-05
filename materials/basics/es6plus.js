let number = 10

const showTen = () => 10

function showNine (){
  return 9
}

const sum = (num1, num2)=>{
  let result = num1+ num2
  return result
}

console.log(showTen())
console.log(showNine())
console.log(sum(10,9))

var laptopName = "Windows"

let word = "example"
let result = `this is ${word} ${laptopName}` // template literal
var resultSentences = "my Laptop is " + laptopName

console.log(result)
console.log(resultSentences)

let name = "John"
let job = "Designer"
let age = 27

let john = {
  name,
  job,
  age
}

console.log(john)



