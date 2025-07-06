import {Router} from 'express'
import {sayHello} from './controller.js'

const router = new Router();

router.get('/hello', sayHello);

export default router;

