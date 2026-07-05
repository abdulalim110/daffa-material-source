const express = require('express');
const app = express();
const port = 3000;

let footballer =["Mbappe", "Olise", "Haaland", "Ronaldo"]

const getFootballer

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get("/footballer", )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});