const express = require('express');
const res = require('express/lib/response');

const app = express();

const PORT = 3001;

app.get('/', (req, res) => {
    // console.log(req);
    res.status(502).send('pgalA JKJK..');
})
app.get('/name',(req, res)=>{
    console.log(req.query,req.params);
    res.status(502).send('pgalA JKJKjk..');
})

app.listen(PORT, () => {
    console.log('Server is running...', `${PORT}`);
})