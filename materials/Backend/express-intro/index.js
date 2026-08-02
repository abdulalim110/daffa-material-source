const express = require('express');
const app = express();
const port = 3000;

let footballers =["Mbappe", "Olise", "Haaland", "Ronaldo"]

const getFootballer = (req, res) =>{
  let {search} = req.query
  if (search){
    let filteredFootballers = footballers.filter((item)=> item.toLowerCase().includes(search.toLowerCase()))
    res.send(filteredFootballers.join(", "));

  }else{
    res.send('Search Not Found');
  }
}

const getFootballerByIndex = (req, res) =>{
  let {index} = req.params
    let footballer = footballers[index]
    if (footballer){
      res.send(footballer);
    }else{
      res.send('Data Not Found');
    }

}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get("/footballers", getFootballer)
app.get("/footballers/:index", getFootballerByIndex)

app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});