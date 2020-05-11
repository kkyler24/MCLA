//  let programMorse = require("morsee");
// const text = morse.morseToText(code); // HEY HOW ARE YOU?
const charCodes = {};
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

const alpahbetCode= [
    {letter: "a", mCode: ".-XX"},
    {letter: "b", mCode: "_..."},
    {letter: "c", mCode: "_._."},
    {letter: "d", mCode: "_..X"},
    {letter: "e", mCode: ".XXX"},
    {letter: "f", mCode: ".._."},
    {letter: "g", mCode: "__.X"},
    {letter: "h", mCode: "...."},
    {letter: "i", mCode: "..XX"},
    {letter: "j", mCode: ".___"},
    {letter: "k", mCode: "_._X"},
    {letter: "l", mCode: "._.."},
    {letter: "m", mCode: "__XX"},
    {letter: "n", mCode: "_.XX"},
    {letter: "o", mCode: "___X"},
    {letter: "p", mCode: ".__."},
    {letter: "q", mCode: "__._"},
    {letter: "r", mCode: "._.X"},
    {letter: "s", mCode: "...X"},
    {letter: "t", mCode: "_XXX"},
    {letter: "u", mCode: ".._X"},
    {letter: "v", mCode: "..._"},
    {letter: "w", mCode: ".__X"},
    {letter: "x", mCode: "_.._"},
    {letter: "y", mCode: "_.__"},
    {letter: "z", mCode: "__.."},
]  

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
    "dont",
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
let splitArray = [];
// // choose random word from array then split it
let splicer = secondGradeSW[Math.floor(Math.random()*secondGradeSW.length)].split("");
let splitWord = console.log(splicer);
// //var secondGradeSW = ['this', 'is', 'a', 'word', 'array'];
// var splitArray = [];
// // choose random word from array then split it
// let splicer = secondGradeSW[Math.floor(Math.random() * secondGradeSW.length)].split("");
// let splitWord = console.log(splicer);
splicer.map((item) => splitArray.push(item));
console.log(splitArray);


let wordMatch = alpahbetCode.filter((obj)=>{
    if (alpahbetCode.letter === splitArray){
        retun (alpahbetCode.mCode);
       
    }
   
})
console.log(wordMatch);
// removes word from array when it has been chosen, so there is no repeat
const index = secondGradeSW.indexOf(splicer);
 if (index > -1) {secondGradeSW.splice(index, 1);
console.log(secondGradeSW);
 }

//  let newWord = splicer;
// Object.values(charCodes).forEach(mCodes => {
//     if (splicer === charCodes[mCodes])
//          newWord = mCodes
// })
$.each(charCodes, function(keys, values){
    if (splitWord === alpahbetCode[keys])
      return(alpahbetCode[values]);
})
// $("#displayBox").val(splitWord);


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



//