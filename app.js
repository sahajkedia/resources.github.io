const express = require('express')
const port = 4000;
const ejs = require('ejs')
const app = express();

app.use(express.static('public'));
app.use(express.json());



app.listen(port, () => {
    console.log(`connected @ ${port}`);
})