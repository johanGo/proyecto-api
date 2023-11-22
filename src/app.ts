import express from 'express';
import {Request, Response} from 'express';
import connection from './db/config';
import { urlencoded, json } from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import pacienteRoutes from './routes/pacientes-routes';
import doctoresRoutes from './routes/doctores-routes'
import citasRoutes from './routes/citas-routes'
dotenv.config();

const app = express()

app.use(json());
app.use(cors());
app.use(urlencoded());

app.get('/', (req: Request, res: Response)=>{
    res.send('Bienvenido a mi api')
})

app.use('/api/pacientes', pacienteRoutes)
app.use('/api/doctores', doctoresRoutes)
app.use('/api/citas',citasRoutes )

//error de rutas
app.use((req: Request, res: Response)=>{
    res.status(400).send('404 page not found')
})

//error de servidor
app.use((req: Request, res: Response)=>{
    res.status(500).send('500: internal server error')
})

//coneccion con la db
connection.sync()
.then(()=>{
    console.log(`Database ${process.env.db} connected`)
})
.catch((err)=>{
    console.log(`El error de la conexion es ${err}`)
});

//iniciar el servidor
app.listen(process.env.port, ()=>{
    console.log(`Servidor iniciado en: http://${process.env.HOST}:${process.env.PORT}`)
})