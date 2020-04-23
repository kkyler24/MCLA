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
        board.positions.forEach(el =>el.removeEventListener("click", huTurnTaken));
    }
}console.log("it works");

function ComputerPlayer(board) {
    this.takeTurn = function () {
      
    }
}