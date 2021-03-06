//Main File for Application//
'use strict'; //Throws error, for testing

const express = require('express');
//Require Blog Posts
const posts = require('./mock/posts.json');
const app     = express();

//Retrieve and render HTML template
app.set('view engine', 'pug');
app.set('views', __dirname + './templates');
app.get('/', function(req, res){
  res.render('index.pug');
});


//Route for root of server using Location '/', request and response
app.get('/', function(req, res){
  res.send("<h1>Thesis Project is up!</h1>");
});

//Blog Posts
  app.get('/blog/:title', function(req, res){

    let title = req.params.title;
    if(title === undefined) {
      res.status(503);
      res.send("This page is under construction");
    } else {
      let post = posts[title] || {};
      res.render('post', { post: post});
    }

});
//Set Development Server 3000 or 8080
app.listen(8080, function(){
  console.log("Frontend Server is running on port 8080!")
});
