// const { encode, decode } = require('morsee');

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

let splicer = secondGradeSW[Math.floor(Math.random()*secondGradeSW.length)];
console.log(splicer);
// let splicerTwo = secondGradeSW.indexOf("")

const index = secondGradeSW.indexOf(splicer);
if (index > -1) {
  secondGradeSW.splice(index, 1);
}
console.log(secondGradeSW);
xmorse.decode(index);
//  secondGradeSW.splice(0,1)


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


