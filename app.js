//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){
  // res.render("home");
  res.sendFile(__dirname+"/index.html");
});


app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/certificate", function(req, res){
  res.render("certificate");
});
app.get("/hobby", function(req, res){
  res.render("hobby");
});


app.get("/project", function(req, res){
   res.render("project");
});

app.listen(4000, function() {
  console.log("Server started on port 3000");
});