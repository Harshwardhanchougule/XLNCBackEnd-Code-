import { Router } from 'express';
import {
  createIndustry,
  getIndustries,
  getIndustryById,
  updateIndustry,
  deleteIndustry,
} from '../controllers/industries.controller';

const router = Router();

router.post('/', createIndustry);
router.get('/', getIndustries);
router.get('/:id', getIndustryById);
router.put('/:id', updateIndustry);
router.delete('/:id', deleteIndustry);

export default router;