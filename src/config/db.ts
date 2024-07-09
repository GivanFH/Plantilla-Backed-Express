import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';

dotenv.config();

//Conexion a mySQL
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    models: [
    //Poner modelos aqui

    
    ]
});



export default db