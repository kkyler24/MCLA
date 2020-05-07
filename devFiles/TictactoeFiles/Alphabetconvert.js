var charCodes = {};
charCodes["a"] = "._XX";
charCodes["b"] = "_...";
charCodes["c"] = "_._.";
charCodes["d"] = "_..X";
charCodes["e"] = ".XXX";
charCodes["f"] = ".._.";
charCodes["g"] = "__.X";
charCodes["h"] = "....";
charCodes["i"] = "..XX";
charCodes["j"] = ".___";
charCodes["k"] = "_._X";
charCodes["l"] = "._..";
charCodes["m"] = "__XX";
charCodes["n"] = "_.XX";
charCodes["o"] = "___X";
charCodes["p"] = ".__.";
charCodes["q"] = "__._";
charCodes["r"] = "._.X";
charCodes["s"] = "...X";
charCodes["t"] = "_XXX";
charCodes["u"] = ".._X";
charCodes["v"] = "..._";
charCodes["w"] = ".__X";
charCodes["x"] = "_.._";
charCodes["y"] = "_.__";
charCodes["z"] = "__..";

// second grade sight words
let secondGradeSW = [
    "call",
    "sit",
    "cold",
    "sleep",
    "does",
    "tell",
    "buy",
    "best",
    "because",
    "don’t",
    "their",
    "fast",
    "these",
    "first",
    "those",
    "five",
    "upon",
    "found",
    "us"

];


// randomly pick a word with js
// convert word to morse
// target and element with jquery (id or class of where you expect the word to show)
// update element with new word


// use jquery to take that word and place on the page


// 
// gave	use
// goes	very
// green	wash
// its	which
// made	why
// many	wish
// or	work
// pull	would
// read	write
// right	always
// sing	around
// your      
// off                     	been
// both	before

// Tictactoe code
// 1.	Create else if statement for alpha beta If "s"=== "s" Return (•••). 
// Create object where key value pairs are the alphabet  and its key value pair. 
// Example. 

// Board adjustments 
// 	3 symboled letters = adjust board to 3x3x3
// 	4 symbols adjust board to 4x4x4
// 	Use .length to asses the number of symbols for that letter 
// 	Use if and else if to determine if .length is === to 4 or 3 
// 	then write a function to change board adjust board.

// How to get conversion letters  
// 	DATABASE of words
// 	Tables of levels of words and  categories.
// 	Must be able to connect database to server to pull random words 

// from database 
// 	Words must be given then split into individual letters,  
// 	then reassembled as characters
// 	Then displayed as morse code.  
// 	Loop through object array, to find matching letters 
// 	display their value to computer as morse coded word. 
// Random  words selectors and display
// 	Maybe create an array of 1st and 2nd grade site words. 


// //TODO
// * Must use a Node and Express server : DONE

//

// * Must be backed by a MySQL database and an ORM (not necessarily Sequelize)
// NEEDS REVIEW... SQL Database will be list of words etc 

// * Must utilize both GET and POST routes for retrieving and adding new data
// GET Words POST scores

// * Must be deployed using Heroku (with data)
// Disreagard

// * Must utilize at least one new third-party API
// REVIEW... Unity

// * Must have a polished UI

// * Must use a CSS framework _other than_ Bootstrap
// Materialize 

// * Must follow MVC paradigm
// Will use handle bars to render user profile pages? game pages? user validation?

// * Must meet good quality coding standards (indentation, scoping, naming)
// Will let Linter handle... Semantic tags 

// * Must use Handlebars.js