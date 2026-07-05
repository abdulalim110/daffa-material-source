// let name="Abdul"
// let number=15+15

// console.log(name)
// console.log(number)

// let bookName


// console.log(bookName)
// bookName = "Harry Potter"
// console.log(bookName)

// console.log(bookName.length > 10) 

// first example
// using var you can execute it first but not with let
console.log(carName)

var carName

// second example
// we can redeclare var with different block scope bot not with let

var tvBrand = "Samsung"

console.log(tvBrand)

if (true){
  var tvBrand = "LG"
}
console.log(tvBrand)


let phoneBrand = "Iphone"
console.log(phoneBrand)

{ // block scope
  let phoneBrand = "OPPO"
}
console.log(phoneBrand)

// third example
// in var we can declare 
var laptopName = "Macbook"

var laptopName = "Windows"

console.log(laptopName)

let bottleName = "Corkcircle"

console.log(`${bottleName} is the best bottle`)


console.log(bottleName.indexOf("best"))
console.log(bottleName.substring(4,10))

console.log(bottleName.toLowerCase().replaceAll("c", ""))


