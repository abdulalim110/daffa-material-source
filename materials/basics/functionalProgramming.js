function countdown(number){
  console.log(number)

  let newNumber = number - 1
  if (newNumber > 0){
    countdown(newNumber)
  }
}

countdown(10)


function getGreeting(){
  var x = 0
  for (var i=0; i<10000000000; i++){
    x += i
  }

  return "Good Morning"
}


function say(callback){
  var greeting = callback()
  return function(name){
    console.log(greeting, name)
  }
}

var users = ["Fuad", "Frank", "Ryan", "Cole", "Palmer"]
var sayGreeting = say(getGreeting) // heavy compoutation first

users.map(function(user){
  return sayGreeting(user)
}) // split loop for user only not call getGreeting in the loop like the first example