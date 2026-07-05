class Person {
  #salary
  constructor(name){
    this._name = name
    this._job = ""
    this._age = 0
    this.#salary = 0
  }

  get salary() {
    return this.#salary; 
  }
  set salary(value) {
    this.#salary = value; 
  }
  get name(){
    return this._name
  }

  set name(value){
    this._name = value
  }

  get job(){
    return this._job
  }

  set job(value){
    this._job = value
  }

  get age(){
    return this._age
  }

  set age(value){
    this._age = value
  }

  static bundleInputPeople(){
    console.log("...Processing Input people")
  }

  sayHello(helloStr){
    console.log(`${helloStr} my name is ${this._name}`)
  }
}

class Lecturer extends Person{
  constructor(name){
    super(name)
    this._job = "Lecturer"
    this._classes = [] // protected
  }

  teach(){
    console.log(`${this._name} is teaching the class....`)
  }

  // overriding
  sayHello(helloStr){
    console.log(`${helloStr} my name is ${this._name} and My Job is Lecturer`)
  }
}

let john = new Person("John") // first object
let jane = new Person("Jane") // second object

let matthews = new Lecturer("Matthews")

matthews.sayHello("Hi")
matthews.teach()
matthews.age = 40
matthews.salary = 4000000000
john.sayHello("Hi")
jane.sayHello("Hello")
console.log("John Salary:", john.salary)
console.log("Jane Salary:", jane.salary)
console.log("Matthews Salary:", matthews.salary)

console.log(matthews)
console.log(john)
console.log(jane)

Person.bundleInputPeople()