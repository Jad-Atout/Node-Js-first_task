import express from 'express';
const app = express();
app.get('/products', (req, res) => {
    res.json({data:'all products'})
})

app.post('/product' ,express.json(), (req, res) => {
    console.log(req.body)
})


app.listen(3000)