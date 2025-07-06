import {Router} from 'express'

const router = new Router();

router.get('/hello', (req, res) => {
    return res.json({
        hello: 'world'
    });
})

export default router;

