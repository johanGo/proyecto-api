import { RequestHandler } from "express";
import { Citas } from "../models/citas-model";

export const getCitas:RequestHandler = async(req, res)=>{
    try {
        const cita = await Citas.findAll()
        res.status(200).json({
            message:'Operacion exitosa al traer las citas',
            data:cita
        })
    } catch (error) {
        res.status(500).json({
            message:'Error al obtener las citas'
        })
    }
} 

export const getOneCita:RequestHandler = async(req, res)=>{
    try {
        const {doctor, paciente, fecha} = req.query

        const cita = await Citas.findOne({
            where:{
                fecha_hora: fecha,
                id_numeroCedula:paciente,
                id_doctor:doctor
            }
        })
        if(cita){
            res.status(200).json({
                message:'Cita encontrada',
                data: cita
            })
        }else{
            res.status(404).json({
                message:'Cita no encontrada'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message:'Error al obtener las citas',
            error:error.message
        })
    }
}

export const createCita:RequestHandler = async(req, res)=>{
    try {
        const cita = await Citas.create(req.body)
        res.status(200).json({
            message:'Cita creada',
            data: cita
        })
    } catch (error:any) {
        res.status(500).json({
            message:'Error al crear la cita',
            error:error.message
        })
    }
}

export const updateCita:RequestHandler = async(req, res)=>{
    try {
        const {doctor, paciente, fecha} = req.query
        const cita = await Citas.findOne({
            where:{
                fecha_hora: fecha,
                id_numeroCedula:paciente,
                id_doctor:doctor
            }
        })
        if(cita){
            await Citas.update(req.body,{
                where:{
                    fecha_hora: fecha,
                    id_numeroCedula:paciente,
                    id_doctor:doctor
                }
            })
            res.status(200).json({
                message:'Cita actualizada',
                data: cita
            })
        }else{
            res.status(404).json({
                message:'La cita no existe'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message:'Error al actualizar la cita',
            error:error.message
        })
    }
}

export const deleteCita:RequestHandler = async(req, res)=>{
    try {
        const {doctor, paciente, fecha} = req.query
        const cita = await Citas.findOne({
            where:{
                fecha_hora:fecha,
                id_numeroCedula:paciente,
                id_doctor:doctor
            }
        })
        if(cita){
            await Citas.destroy({
                where:{
                    fecha_hora:fecha,
                    id_numeroCedula:paciente,
                    id_doctor:doctor
                }
            })
            res.status(200).json({
                message:'Cita eliminada',
                data: cita
            })
        }else{
            res.status(404).json({
                message:'La cita no se encontro para su eliminacion'
            })
        }
    } catch (error:any) {
        res.status(500).json({
            message:'Error al eliminar la cita',
            error: error.message
        })
    }
}