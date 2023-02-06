//router index file
import { Router } from 'express';
import ThunderController from '../controllers/ThunderController';

const router:Router = Router();

router.post('/', ThunderController.createThunder);
//router.put('/:thunderId', ThunderController.updateThunder);
router.get('/:thunderId', ThunderController.findThunderById);
router.get('/', ThunderController.findThunderAll);
router.get('/hashtags?hashtag=', ThunderController.findThunderByHashtag);
//router.delete('/:thunderId', ThunderController.deleteThunder);

export default router;