//Main File for Application//
'use strict'; //Throws error, for testing

const express = require('express');
const app     = express();

//Route for root of server using Location '/', request and response
app.get('/', function(req, res){
  res.send("Thesis Project is up!");
})
//Set Development Server 3000 or 8080
app.listen(8080);
