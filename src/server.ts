import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec, {swaggerUiOptions} from './config/swagger';
import { corsConfig } from './config/cors';


//conectar a la base de datos Mysql
async function connectDBMySQL() {
    try {
        // await db.authenticate()
        // db.sync({alter: true})
        db.sync()
        console.log('Conexion exitosa a la DB')
        
    } catch (error) {
        console.log(error)
        console.log('Hubo un error al conectar a la db')
    }
}

connectDBMySQL()

//Instancia de express
const server = express()

//Habilitar Cors para tener acceso externo
server.use(cors(corsConfig))    

//Leer datos de formularios
server.use(express.json())

//Subfijo de la API
server.use('/api/directorio', router)

//Swagger para documentar la API
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server