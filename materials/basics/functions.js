// function without return
function helloWorld(){
  console.log("Hello World")
}

helloWorld()

// function with return
function sum(num1, num2=10){
  console.log(num2)
  return num1+num2
}

console.log(sum(7))
