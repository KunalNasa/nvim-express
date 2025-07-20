import express from 'express'
import router from './route.js'

const app = express();

app.use('/routes', router);
app.get('/', (req, res) => {
    return res.json({
        name: 'kunal',
        from: 'neovim',
        create: "conflict from GH",
    });
})
const PORT = 9000;

app.listen(PORT, () => {
    console.log(`App is live on port ${PORT}`);
})
