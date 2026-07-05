let arr=[10,6,7,9]

arr[0]// 10
arr[3]// 9

let john ={
  name: "John",
  job: "designer",
  "favourite colors": "blue",
  favouriteFoods: "Bakso" 
}

console.log(john)
console.log(john.name)
console.log(john["favourite colors"])


let numbers=[10,6,7,9]

for (let i=0;i<numbers.length;i++){
  console.log(arr[i])
}

const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "Bob Marley", email: "bob@marley.com" },
];


console.log("------foreach example------")
users.forEach(function(value, index){
  console.log(index+1, value.name)
})
console.log("------foreach example------")

console.log("------map example------")
let emailOfUsers = users.map(function(value){
  return value.email
})
console.log(emailOfUsers)
console.log("------map example------")

console.log("------filter example------")
let filterOfBob = users.filter(function(value){
  return value.name.includes("Bob")
})
console.log(filterOfBob)
console.log("------filter example------")

