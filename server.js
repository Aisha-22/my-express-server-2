// jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at ash.hlatshwayo22@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Aisha, and I am studing web development");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Code</li><li>Sport</li><li>Travel</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

