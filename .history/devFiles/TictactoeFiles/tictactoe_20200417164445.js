// var winningCombinations = {
//     // userchoice: computerchoice
//     rock: 'scissors', // you win
//     paper: 'rock',    // you win
//     scissors: 'paper' // you win
// random words should be put in here and converted to morse code. the computer should evaluate if your letter box matches the randomized word to win the round. 
// };
const ticTacToeGame = new TicTacToeGame();
ticTacToeGame.start();

// creates new game
function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer();
    const computerPlayer = new ComputerPlayer();
    let turn = 0
        this.start = function(){
// This sets up the functions of the baord, players and turns.
        }

 }

 function Board(){
    this.positions = Array.from($("cellBOne"));
        for (i = 0; i< this.positions.length; i++);
        console.log(this.positions);
    };
   
 

 function HumanPlayer(){
     
}

function ComputerPlayer(){
     
}