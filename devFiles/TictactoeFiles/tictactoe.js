
// random words should be put in here and converted to morse code. the computer should evaluate if your letter box matches the randomized word to win the round. 
// };
let selectedOption = "circleP";
$("#squareButton").click(function (event) {
    selectedOption = "squareP";
});
$("#circleButton").click(function (event) {
   
    selectedOption = "circleP";
});
$("#dashButton").click(function (event) {
    selectedOption = "dashP";
});

const ticTacToeGame = new TicTacToeGame();
let turn = 0;
ticTacToeGame.start();



// creates new game
function TicTacToeGame() {
    const board = new Board();
    const humanPlayer = new HumanPlayer(board);
    const computerPlayer = new ComputerPlayer(board);
   
    this.start = function () {
        // This sets up the functions of the board, players and turns.
        // making sure you wathcing of there are any changes in position, because that woudl mean it is the next players turn. We do this by using a mutationObserver
        const config = { childList: true, attributeFilter: ["class"] };
        const observer = new MutationObserver(() => takeTurn());
        // now adding the observer to the board.positions so it can run through each (for each function) one to check for mutations. if there are mutations, then we call the take turn function. 
        board.positions.forEach((el) => observer.observe(el, config));
        takeTurn();
    }
    function takeTurn() {
        console.log("turn", turn);
        if (turn % 2 === 0) {
            humanPlayer.takeTurn();
        } else {
            computerPlayer.takeTurn();
        }
        turn++;
        //the above determines who turn it is. and tells the player pr computer to take their turn.  
    }
}

// function currentPlayerColor (){
//     if(turn % 2===0){
//         selectedOption=> 
//     }
// if .cellBOne
    // if turn is odd then human.player is green
    // else make class blk. 
// }


function Board() {
    this.positions = Array.from($(".cellBOne"));
    // console.log(this.positions);
}





function HumanPlayer(board) {
    this.takeTurn = function () {
        board.positions.forEach(el => el.addEventListener("click", huTurnTaken));
    }
    
    function huTurnTaken(event) {
        let isClicked = false;
        // When selected Option is in the cell restrict another class being applied, when cell is empty only one class can be applied if cellBone
        console.log(event.target.classList);
       event.target.classList.forEach(classname=>{
console.log(classname); 
        if (classname === "circle" || classname === "dash" ||classname === "square" || classname === "circleP" || classname === "dashP" || classname === "squareP"){
            isClicked = true;
        }
        })
        if (!isClicked){
            event.target.classList.add(selectedOption);
        board.positions
            .forEach(el => el.removeEventListener("click", huTurnTaken));
        }
        
    }
}



// creating a var of available positions, which will put it in an array, and  that will filter for out taken positions. 
function ComputerPlayer(board) {
    this.takeTurn = function () {
        const availablePositions = board.positions.filter((p) => {
            console.log(p.classList.contains('circle'))

            p.classList.contains("circle")
            if (p.classList.contains('circle')) {
                return false
            } else if (p.classList.contains('dash')) {
                return false
            } else if (p.classList.contains('square')) {
                return false
            } else if (p.classList.contains('dashP')) {
                return false
            } else if (p.classList.contains('circleP')) {
                return false
            } else if (p.classList.contains('squareP')) {
                return false
            }
            return true
        });
        //   this allows the computer to choose a random position from the available positions
        let classOptions = [
            "circle",
            "dash",
            "square",

        ];

        let optionPicker = Math.floor(Math.random() * classOptions.length);
        // console.log(optionPicker);
        let x = classOptions[optionPicker];

        const move = Math.floor(Math.random() * availablePositions.length);
        availablePositions[move].classList.add(x);


    }
    // 
}
// make computer randomly choose between, rows, column, or diagonal that are directtly adjacent to its own cell. 
// order computer to make letter that would form the given word, if can't then new board, then assign completed to player Letter box until filled. 
// letter box sizes changes based on words. 



// Letter Conversion Therapy
// console.log($(".cellBOne").slice(0,3));
// the code below takes the first three cells from the array and testing to see if it is equal to the classes circle and dashes. 
let firstRow = Array.from($(".cellBOne").slice(0, 4));
console.log(Array.from(firstRow));
let firstRowString = "";
firstRow.forEach((cell, i) => {
    console.log(i, cell.classList)
    if (cell.classList[1] === "circle")
        firstRowString += ".";
    if (cell.classList[1] === "dash")
        firstRowString += "_";
    if (cell.classList[1] === "square")
        firstRowString += "X";
})
console.log(firstRowString);
//the below code takes the charcodes object array and matches it to key of the key value pairs of the object, and spits back the matching letter.  
console.log(Object.keys(charCodes));
let morseMatch = "";
Object.keys(charCodes).forEach(mCodes => {
    console.log(charCodes[mCodes])
    if (firstRowString === charCodes[mCodes])
        morseMatch = mCodes
})
console.log(morseMatch);


let checkBoard = Array.from($('.cellBOne'));
// if 


