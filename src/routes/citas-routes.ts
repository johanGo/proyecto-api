import { Router } from "express";
import { getCitas, getOneCita, createCita, updateCita, deleteCita } from "../controller/citas-controllers";
const router= Router();

router.get('/', getCitas)
router.get('/one-cita', getOneCita)
router.post('/', createCita)
router.put('/', updateCita)
router.delete('/', deleteCita)
export default router

