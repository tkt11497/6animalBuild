const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'web')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});


app.listen('8000',()=>{
    console.log('lesing on 8000')
});