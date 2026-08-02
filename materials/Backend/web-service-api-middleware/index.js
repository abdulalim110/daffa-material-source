const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())// request body parser

let movies =[
  {id: 1, title: "Spider-Man", year: 2004},
  {id: 2, title: "John Wick", year: 2014},
  {id: 3, title: "Avengers", year: 2018},
  {id: 4, title: "Logan", year: 2017}
]

const getMovies = (req, res) =>{
  let {search} = req.query
  if (search){
    let filteredMovies = movies.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))
    res.json({
      status: "success",
      data: filteredMovies.join(", ")}
    );

  }else{
    res.json(
      {
        status: "success",
        data: movies
      });
  }
}

const createMovie = (req, res)=>{
  const {title, year} = req.body

  let id = movies.length + 1

  movies = [...movies, {id, title, year}]

  res.json({
    status: "success",
    data: {id, title, year}
  })
}

const middlewareLog = (req, res, next)=>{
  const {token} = req.query
  console.log("middleware log....")
  if (token === "12345"){
    next()
  }else{
    res.send("sorry your token is wrong")
  }
}

const text = (req,res, next)=>{
  res.send("the text after middleware")
}


const basicAuth = (req,res, next)=>{
  let authHeader = req.headers.authorization;

  if (!authHeader){
    let err = "not authenticated"
    res.setHeader('WWW-Authenticate', 'Basic');
    res.json({status: "not authenticated", data: null}).status(401)
  }

  let auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
  let user = auth[0]
  let pass = auth[1]

  console.log({user, pass})

  if (user == 'admin' && pass == 'password'){
    next()
  }else{
    let err = "not authenticated"
    res.setHeader('WWW-Authenticate', 'Basic');
    res.json({status: "not authenticated", data: null}).status(401)
  }
}


app.get("/movies", getMovies)
app.post("/movies", basicAuth, createMovie)
app.get("/text", middlewareLog, text)
// app.get("/movies/:index", getFootballerByIndex)



app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`);
});