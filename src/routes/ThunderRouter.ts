//router index file
import { Router } from 'express';
import ThunderController from '../controllers/ThunderController';

const router:Router = Router();

router.post('/', ThunderController.createThunder);
router.put('/:thunderId', ThunderController.updateThunder);
router.get('/:thunderId', ThunderController.findThunderById);
router.delete('/:thunderId', ThunderController.deleteThunder);

export default router;