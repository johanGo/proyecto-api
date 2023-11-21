import { RequestHandler} from "express";
import { Pacientes } from "../models/pacientes-model";

// RequestHandler trae los tipos, no se debe especificar tipos en Req y Res
export const getPaciente:RequestHandler = async(req, res)=>{
    try {
        const pacientes = await Pacientes.findAll()

        res.status(200).json({
            message: 'Operacion exitosa',
            data: pacientes
        })
    } catch (error) {
        const err= error as Error
        res.status(500).json({
            message: 'Error al obtener los pacientes',
            error: err.message
        })
    }
}

export const getPacienteById:RequestHandler = async(req,res)=>{
    try {
        const paciente = await Pacientes.findByPk(req.params.id)
        if (paciente){
            res.status(200).json({
                message:'Paciente encontrado',
                data: paciente
            })
        }else{
            res.status(404).json({
                message:'Paciente no encontrado por id'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message: 'Error al obtener los paciente',
            err: error.message
        })
    }
}

export const createPaciente:RequestHandler = async (req, res)=>{
    try {
        const paciente = await Pacientes.create(req.body)
        res.status(201).json({
            message: 'Paciente creado exitosamente',
            data: paciente
        })
    } catch (error:any) {
        res.status(500).json({
            message: 'El paciente no fue creado',
            error: error.message
        })
    }
}

export const updatePaciente:RequestHandler = async(req, res)=>{
    try {
        const paciente = await Pacientes.findByPk(req.params.id)
        if(paciente){
            await Pacientes.update(req.body,{
                where:{
                    id_numeroCedula : req.params.id
                }
            })
            res.status(200).json({
                message: 'Paciente actualizado'
            })
        }else{
            res.status(404).json({
                message: 'Paciente no encontrado para la actualizacion'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message: 'Paciente modificado', 
            error : error.message
        })
    }
}

export const deletePaciente:RequestHandler = async(req,res)=>{
    try {
        const paciente = await Pacientes.findByPk(req.params.id)
        if(paciente){
            await Pacientes.destroy({
                where:{
                    id_numeroCedula: req.params.id
                }
            })
            res.status(200).json({
                message: 'Paciente eliminado'
            })
        }else{
            res.status(404).json({
                message: 'paciente no existe para eliminarlo'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message: 'Paciente no fue elimnado',
            error: error.message
        })
    }
}