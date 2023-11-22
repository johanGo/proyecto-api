import { RequestHandler } from "express";
import { Doctores } from "../models/doctores-model";

export const getDoctores:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findAll()
        res.status(200).json({
            message: 'operacion exitosa al traer los doctores',
            data: doctor
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message:'Fallo al traer los doctores',
            error:err.message
        })
    }
}

export const getDoctoresById:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id)
        if(doctor){
            res.status(200).json({
                message: 'Operacion exitosa al traer el doctor por ID',
                data: doctor
            })
        }else{
            res.status(400).json({
                message:'No se pudieron traer los doctores por ID',
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message:'Error al traer los doctores por id',
            error: error.message
        })
    }
}

export const createDoctores:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.create(req.body)
        res.status(201).json({
            message:'Doctor creado exitosamente',
            data: doctor
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al crear el doctor',
            error: err.message
        })
    }
}

export const updateDoctores:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id)
        if(doctor){
            await Doctores.update(req.body,{
                where:{
                    id_doctor : req.params.id
                }
            })
            res.status(200).json({
                message:'Doctor actualizado'
            })
        }else{
            res.status(404).json({
                message:'Doctor no encontrado para la actualizacion'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message:'Error al actualizar el doctor',
            error: error.message
        })
    }
}

export const deleteDoctores:RequestHandler = async (req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id)
        if(doctor){
            await Doctores.destroy({
                where:{
                    id_doctor: req.params.id
                }
            })
            res.status(200).json({
                message: 'Doctor eliminado',
                data: doctor
            })
        }else{
            res.status(404).json({
                message: 'Doctor no existe para eliminarlo'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message: 'Doctor no pudo ser eliminado',
            error: error.message
        })
    }
}