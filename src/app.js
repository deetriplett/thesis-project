//Main File for Application//
'use strict'; //Throws error, for testing

const express = require('express');
const posts = require('./mock/posts.json');
const app     = express();

//Require Blog Posts


//Route for root of server using Location '/', request and response
app.get('/', function(req, res){
  res.send("<h1>Thesis Project is up!</h1>");
});
//Get Route for blog posts
app.get('/blog', function(req, res){
  res.send(posts);
});

//Set Development Server 3000 or 8080
app.listen(8080, function(){
  console.log("Frontend Server is running on port 8080!")
});
