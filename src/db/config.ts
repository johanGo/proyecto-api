import {Sequelize} from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import { Pacientes } from '../models/pacientes-model';
import { Doctores } from '../models/doctores-model';
import { Citas } from '../models/citas-model';
dotenv.config();
const connection = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: 'root',
    password: process.env.PASSWORD,
    database: process.env.DB,
    logging: false,
    models: [Pacientes, Citas, Doctores]
})

export default connection;