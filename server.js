const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
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

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// should be inside html-routes.js
app.get("/", function(req, res) {
    res.render("index");
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

