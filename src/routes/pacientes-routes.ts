import { Router } from "express";
import { getPaciente, getPacienteById, createPaciente, updatePaciente, deletePaciente } from "../controller/pacientes-controller";

const router = Router();

router.get('/', getPaciente);
router.get('/:id', getPacienteById);
router.post('/', createPaciente);
router.put('/:id', updatePaciente);
router.delete('/:id', deletePaciente);

export default router
