//task 1

const express = require('express');
const app = express();
const port = 3000;

app.get('/lingkaran-tabung', (req, res) => {
  const radius = Number(req.query.radius);
  const height = Number(req.query.height);
  
  function AreaofCircle(radius){
    return((22/7) * radius * radius);
  }

  function CircumferenceofCircle(radius){
    return(2 * (22/7) * radius);
  }

  function VolumeofCylinder(radius, height){
    return(((22/7) * radius * radius) * height)
  }
  
  let result = `
  radius: ${radius} <br/>
  height: ${height} <br/>
  <br/>
  cylinder volume: ${VolumeofCylinder(radius, height)}
  <br/>
  cylinder base area: ${AreaofCircle(radius)}
  <br/>
  cylinder base circumference: ${CircumferenceofCircle(radius)}
  `
    res.send(result);
});

let people = [
  {id: 1, name: "John", age: 30, occupation: "Writer", gender: "M"},
  {id: 4, name: "Benzema", age: 34, occupation: "Soccer player", gender: "M"},
  {id: 5, name: "Sarah", age: 27, occupation: "Modeler", gender: "F"},
  {id: 9, name: "Shohei Ohtani", age: 28, occupation: "Bastkeball player", gender: "M"},
  {id: 11, name: "Maria Sharapova", age: 35, occupation: "Petenis", gender: "F"}
]; // dummy


//task 2

app.get('/data-orang', (req, res) => {

  const {age, gender} = req.query;

  let result = people;

  if(age){
    result = result.filter((person) => person.age >= Number(age));
  }

  if(gender){
    result = result.filter((person) => person.gender === gender);
  }

  const output = result.map((person, index) => {
    return `${index + 1}. ${person.name} - Occupation: ${person.occupation} - Age: ${person.age} years old`
  });
  res.send(output.join("<br>"));

});

//task 3

app.get('/data-orang/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = people.find((person) => person.id === id);

  if (person === undefined){
    res.send("Sorry, data is not found");
  }else{
  let title;

  if(person.gender === "M"){
    title = "Mr.";
  } else{
    title = "Mrs.";
  };
  res.send(
    `${title} ${person.name} is a ${person.occupation} who is ${person.age} years old`
  );
}
});

app.listen(port, () => {
  console.log(`${port}`);
});