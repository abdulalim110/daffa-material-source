// 1. Convert Array to Object

let participantArray = ["John Doe", "male", "read books", "1992"];

let participantObject = {
    name: participantArray[0],
    gender: participantArray[1],
    hobby: participantArray[2],
    "birth year": participantArray[3]
}

console.log(participantObject);

// 2. Create Array of Objects

let fruits = [
    {name: "Pineapple", color: "Yellow", seeds: "no", price: "9000"},
    {name: "Orange", color: "Orange", seeds: "yes", price: "8000"},
    {name: "Watermelon", color: "Green and Red", seeds: "yes", price: "10000"},
    {name: "Banana", color: "Yellow", seeds: "no", price: "5000"}
]

let arrayFruitsFilter = fruits.filter(function(item){
    return item.seeds != "yes";
})

console.log(arrayFruitsFilter);

// 3. Adding Object Data to Array via Function

let movieData = [];

function addMovieData(title, duration, genre, year){
    let movie = {
        title: title,
        duration: duration,
        genre: genre,
        year: year
    };
    movieData.push(movie);
}

addMovieData("LOTR", "2 hours", "Action", "1999");
addMovieData("Avengers", "2 hours", "Action", "2019");
addMovieData("Spiderman", "2 hours", "Action", "2004");
addMovieData("Juon", "2 hours", "Horrors", "2004");

console.log(movieData);

// 4. Group Data

let people = [
    {name: "John", job: "Programmer", gender: "male", age: "30"},
    {name: "Sarah", job: "Model", gender: "female", age: "27"},
    {name: "Jack", job: "Engineer", gender: "male", age: "25"},
    {name: "Ellie", job: "Designer", gender: "female", age: "35"},
    {name: "Danny", job: "Footballer", gender: "male", age: "30"},
]

let arrayPeopleFilter = people.filter(function(people){
    return people.gender === "male" && people.age > 29;
})

console.log(arrayPeopleFilter);