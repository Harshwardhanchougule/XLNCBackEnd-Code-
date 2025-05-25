import { Router } from 'express';
import { getReflections, createReflection } from '../controllers/reflection';

const router = Router();

router.get('/', getReflections);
router.post('/', createReflection);

export default router;