import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import router from './src/routes/main'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json'

const app = express();
const port = 3001;

var corsOptions = {
  origin: process.env.ALLOW_LIST.split(","),
  optionsSuccessStatus: 200
}

// this is for vercel only
// vercel has a glitch when use the swagger ui express library
const swaggerOptions = {
  customCss : '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; } .swagger-ui button.opblock-control-arrow {cursor: pointer;border: none; background: none;}',
  customCssUrl: `https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.6.2/swagger-ui.css`
};

app.use(cors(corsOptions))

app.use(express.json())

app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile, swaggerOptions))


app.listen(port, () => {
  console.log(`Movie app listening on port ${port}`);
});