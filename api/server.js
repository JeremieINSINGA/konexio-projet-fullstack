const express = require("express");
const app = express();
const port = 8000;
 const {countriesData} = require('./countriesData.json');

// app.get('/all', (req,res) => {
// console.log("Salut");
// res.json(countriesData)
// });

app.listen(port, () =>{
    console.log('server started on port:' + port);
})





