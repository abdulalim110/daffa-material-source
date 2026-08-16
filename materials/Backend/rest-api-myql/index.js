const express = require('express');
const router = require('./src/routes/main');
const app = express();
const port = 3000;


app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`);
});