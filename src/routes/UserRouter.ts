//router index file
import { Router } from 'express';
import UserController from '../controllers/UserController';

const router:Router = Router();

router.post('/', UserController.createUser);
//router.put('/:userId', UserController.updateUser);
router.get('/:userId', UserController.findUserById);
router.get('/hashtags/:userId', UserController.findUserHashtag);
//router.delete('/:userId', UserController.deleteUser);

export default router;