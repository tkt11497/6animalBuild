const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000

app.use('/', express.static(path.join(__dirname, 'web')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});


app.listen(PORT,()=>{
    console.log(`lesing on ${PORT}`)
});