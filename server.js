const path = require("path");
const express = require("express");
const sequel = require("sequelize");
const app = express();
// const exphbs = require("express-handlebars");
const db = require("./models");
// db.Dictionary.findAll();

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 8080;

// Starts the server to begin listening
// =============================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars"); BECAUSE WE DO NOT HAVE HBS FILES 
// should be inside html-routes.js

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname,"public/index.html"))
});

app.get("/api/words/:range",function(req,res){
  var range = req.params.range; 
  range = range.split(",").map(function(element){
    return(parseInt(element))
  });

  db.Words02.findAll({
    where:{id:{ [db.Sequelize.Op.between]: range}
  }}).then(function(db_words){ 
    res.json(db_words)
   });
})

app.get("/api/words",function(req,res){
  db.Words02.findAll().then(function(db_words){ 
    res.json(db_words)
   });
})

// 
app.get("/ttt", function(req, res) {
    res.sendFile(path.join(__dirname,"public/ttt.html"))
  })

app.get("/race", function(req, res) {
  res.sendFile(path.join(__dirname,"public/race.html"))
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname,"public/about.html"))
});

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


