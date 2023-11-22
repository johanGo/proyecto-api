import {Router} from 'express';
import { getDoctores, getDoctoresById, createDoctores, updateDoctores, deleteDoctores } from '../controller/doctores-controller';


const router = Router()

router.get('/', getDoctores)
router.get('/:id', getDoctoresById)
router.post('/', createDoctores)
router.put('/:id', updateDoctores)
router.delete('/:id', deleteDoctores)

export default router