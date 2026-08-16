const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/routes/main');
const app = express();
const port = 3000;
require('dotenv').config()


main().catch(err => console.log(err));

async function main() {
  let testConnection = await mongoose.connect(process.env.MONGODB_CREDENTIALS);
}

app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`);
});