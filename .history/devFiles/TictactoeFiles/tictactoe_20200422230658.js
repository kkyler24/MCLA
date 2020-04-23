// let alphabetC = require("./Alphabetconvert").alphabetConversion;

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
charCodes["s"]="...";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
var temp=''

// random words should be put in here and converted to morse code. the computer should evaluate if your letter box matches the randomized word to win the round. 
// };
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();



// creates new game
function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
    let turn = 0;
    this.start = function () {
        // This sets up the functions of the board, players and turns.
        // making sure you wathcing of there are any changes in position, because that woudl mean it is the next players turn. We do this by using a mutationObserver
        const config = { childList: true };
        const observer = new MutationObserver(() => takeTurn());
        // now adding the observer to the board.positions so it can run through each (for each function) one to check for mutations. if there are mutations, then we call the take turn function. 
        board.positions.forEach((el) => observer.observe(el, config));
        takeTurn();
    }
    function takeTurn() {
        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
        } else {
            computerPlayer.takeTurn();
        }

        turn++;
        //the above determines who turn it is. and tells the player pr computer to take their turn.  

    }

}
 
function Board() {
    this.positions = Array.from($(".cellBOne"));
    console.log(this.positions);
}


function HumanPlayer(board) {
    this.takeTurn = function () {
        board.positions.forEach(el =>addEventListener("click", huTurnTaken));
    }
    // This part may be unnecessary. as you have circles and dashes set up in css. figure out how to get that here. maybe a var and save the style?
    function huTurnTaken(event){
        event.target.innerText="X";
        board.positions
            .forEach(el =>removeEventListener("click", huTurnTaken));
    }
}

function ComputerPlayer(board) {
    this.takeTurn = function () {
      
    }
}
// console.log($(".cellBOne").slice(0,3));

let firstRow =Array.from($(".cellBOne").slice(0,3));
console.log(Array.from(firstRow));
let firstRowString = "";
firstRow.forEach((cell,i)=>{
    console.log(i,cell.classList)
    if (cell.classList[1]=== "circle")
      firstRowString += ".";
      if (cell.classList[1]=== "dash")
      firstRowString += "-";
})
console.log(firstRowString);

console.log(Object.keys(charCodes));
 let morseMatch = "";
 Object.keys(charCodes).forEach(mCodes =>{
     console.log(charCodes[mCodes])
     if (firstRowString === charCodes[mCodes])
     morseMatch = mCodes
 })
console.log(morseMatch);


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

// // module.export= charCodes
// module.export = {
//     alphabetConversion : charCodes
// }

console.log ($(".circle"));