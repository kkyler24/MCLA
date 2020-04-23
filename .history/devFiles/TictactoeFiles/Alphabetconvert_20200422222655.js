// Tictactoe code
// 1.	Create else if statement for alpha beta If "s"=== "s" Return (•••). 
// 2.	Create object where key value pairs are the alphabet  and its key value pair. 
// 3.	Example. 
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


var charCodes= {};
charCodes["a"]=". _";
charCodes["b"]="_ . . .";
charCodes["c"]="_ . _ .";
charCodes["d"]="_ . .";
charCodes["e"]=".";
charCodes["f"]=". . _ .";
charCodes["g"]="_ _ .";
charCodes["h"]=". . . .";
charCodes["i"]=". .";
charCodes["j"]=". _ _ _";
charCodes["k"]="_ . _";
charCodes["l"]=". _ . .";
charCodes["m"]="_ _";
charCodes["n"]="_ .";
charCodes["o"]="_ _ _";
charCodes["p"]=". _ _ .";
charCodes["q"]="_ _ . _";
charCodes["r"]=". _ .";
charCodes["s"]=". . .";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
var temp=''

// function encode() {
// document.morsecode.chars.value=document.morsecode.chars.value.toLowerCase();
// document.morsecode.codebox.value="";
// temp=''
// var chars=document.morsecode.chars.value.split("");

// for (a=0; a<chars.length; a++) {
// if (chars[a]!=" ") {
// if (window.charCodes[chars[a]]) {
// document.morsecode.codebox.value+=charCodes[chars[a]]+"    ";
// temp+=chars[a]+"="+charCodes[chars[a]]+"\n";
// }
// else
// temp+=chars[a]+"=(None)\n";
// }
// else temp+="\n";
// }
// document.morsecode.codebox.value+="\n\n\nEXPLANATION:\n\n"+temp
// }

// module.export= charCodes
module.export = {
    alphabetConversion : charCodes
}

console.log ($(".circle"));