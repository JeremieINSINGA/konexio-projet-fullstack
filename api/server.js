const countries = require("./dataCountries.json");
const express = require("express");
const app = express();
const port = 8100;

app.listen(port, () => {
    console.log(port);
    
});

// parcourir les pays dans json
app.get("/all", (req, res) => {
  let countriesNames = [];
  for (let i = 0; i < countries.length; i++) {
    countriesNames.push(countries[i].name);
  }
  res.send(countriesNames.join(", "));
});
// console.log(countries.name);





