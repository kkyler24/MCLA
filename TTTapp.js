let express = require("express");
let tttapp = express();
let http = require("http");
let PORT = 3001;


app.get("/Home", function(req, res){res.send("Welcome!");})   
app.get("/race", function(req,res){ res.send("Come back Soon!")});   
app.get("/TTT", function(req,res){ console.log("someone made a request!"); res.send("Yum!");});

app.get("/l/:mcla:", function(req,res){
        var MCLA = req.params.mcla;
        res.send(" Welcome to the MorseCode Racer!");
    });



app.listen(PORT, function(){console.log("we have started server");})
app.get("*", function (req, res){res.send("Sorry that page can't be found");});