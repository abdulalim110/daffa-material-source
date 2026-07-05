var num = 6

if (num % 2 === 1){
  console.log(num, "is odd number")
}else if (num > 10){
  console.log(num, "is even number and more than 10")
}else{
  console.log(num, "is even number")
}

var pushedButton = 1
console.log(1=="1") // normal equal

switch(pushedButton){
  case "1": {console.log("number 1 but string"); break;}
  default: {console.log("default"); break;}
}// strict equal
