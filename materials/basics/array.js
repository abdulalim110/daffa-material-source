// declaration
let numbers = [2, 5, 15, 8, 1, 9, 3] // datatype not should be same

console.log(numbers[2])

console.log(numbers.length)
console.log(numbers)

numbers.push(7)

numbers.unshift(11)
console.log(numbers)

let lastNum = numbers.pop()
console.log(lastNum)

console.log(numbers)

let firstNum = numbers.shift()

console.log(firstNum)

console.log(numbers)

let resultString = numbers.join("-")

console.log(resultString)

let footballers = ["Mbeumo", "Mbappe", "Haaland", "Drogba", "Ferdinand", "Beckham", "Cunha"]

footballers.sort()

console.log(footballers)

numbers.sort(function(a,b){
  return a-b
})
console.log(numbers)

let newArr = footballers.slice(2, 5)

console.log(newArr)

newArr.splice(1,2)

console.log(newArr)

