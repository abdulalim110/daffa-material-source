import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "this is Movie Documentation API."
    },
    host: process.env.HOST,
    basePath: "/",
    schemes: ['http', 'https'],
    components: {
        securitySchemes:{
            bearerAuth: {
                type: 'http',
                scheme: 'bearer'
            }
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./index.js']

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc)