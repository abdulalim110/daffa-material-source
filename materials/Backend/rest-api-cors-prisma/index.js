import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import router from './src/routes/main'

const app = express();
const port = 3001;

var corsOptions = {
  origin: process.env.ALLOW_LIST.split(","),
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(router)

app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`);
});