// selection buttons for player
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
let playerScore =[];
let computerScore =[];

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
  };

  //  the code  below  determines who turn it is. and tells the player or computer to take their turn.
  function takeTurn() {
    if (turn % 2 === 0) {
      humanPlayer.takeTurn();
    } else {
      computerPlayer.takeTurn();
    }
    turn++;
    checkFunction();
  }
}

// controls the board
function Board() {
  this.positions = Array.from($(".cellBOne"));
}

// Human Player functionality
function HumanPlayer(board) {
  this.takeTurn = function () {
    board.positions.forEach((el) => el.addEventListener("click", huTurnTaken));
  };

  function huTurnTaken(event) {
    let isClicked = false;
    // When selected Option is in the cell restrict another class being applied, when cell is empty only one class can be applied if cellBone
    //console.log(event.target.classList);
    event.target.classList.forEach((classname) => {
      if (
        classname === "circle" ||
        classname === "dash" ||
        classname === "square" ||
        classname === "circleP" ||
        classname === "dashP" ||
        classname === "squareP"
      ) {
        isClicked = true;
      }
    });
    if (!isClicked) {
      event.target.classList.add(selectedOption);
      board.positions.forEach((el) =>
        el.removeEventListener("click", huTurnTaken)
      );
    }
  }
}

// winning Points and loosing points functionality


// selects all cells, checks for player classes, and matches it up to letter box array, returns match if player classes match letter box array.
function checkFunction() {
  let tttBoard = Array.from($(".cellBOne"));
  let RowString = "";
  tttBoard.forEach((cell, i) => {
    if (cell.classList[2] === "circleP") RowString += ".";
    if (cell.classList[2] === "dashP") RowString += "_";
    if (cell.classList[2] === "squareP") RowString += "X";
  });
  let match = wordMatch.find((str) => {
    return RowString === str;
  });

  // the below code alerts the player of a match then after 1000ms resets the baord.
  if (match) {
    setTimeout(function () {
      alert(match + `  Player awarded Letter. Point + 2`);
    }, 1000);
    tttBoard.forEach((cell, i) => {
      if (cell.classList[2] === "circleP")
      cell.classList.remove("circleP");
       
      if (cell.classList[2] === "dashP")
      cell.classList.remove("dashP");
       
      if (cell.classList[2] === "squareP")
      cell.classList.remove("squareP");
    
      if (cell.classList[2] === "circle")
      cell.classList.remove("circle");
     
      if (cell.classList[2] === "dash")
      cell.classList.remove("dash");
       
      if (cell.classList[2] === "square")
      cell.classList.remove("square");
    });
    console.log("match");
    console.log(match);

    // checking for if match is true and it is the players turn, then adding points to the player and assigning letter to the player.
    if (match = true && turn % 2 === 0) {
        PlayerScore.shift
        
  }
}

// Computer Player
// creating a var of available positions, which will put it in an array, and  that will filter out for taken positions.
function ComputerPlayer(board) {
  this.takeTurn = function () {
    const availablePositions = board.positions.filter((p) => {
      console.log(p.classList.contains("circle"));

      p.classList.contains("circle");
      if (p.classList.contains("circle")) {
        return false;
      } else if (p.classList.contains("dash")) {
        return false;
      } else if (p.classList.contains("square")) {
        return false;
      } else if (p.classList.contains("dashP")) {
        return false;
      } else if (p.classList.contains("circleP")) {
        return false;
      } else if (p.classList.contains("squareP")) {
        return false;
      }
      return true;
    });

    //   this allows the computer to choose a random position from the available positions
    let classOptions = ["circle", "dash", "square"];

    let optionPicker = Math.floor(Math.random() * classOptions.length);
    let x = classOptions[optionPicker];

    const move = Math.floor(Math.random() * availablePositions.length);
    availablePositions[move].classList.add(x);
  };
}

// Letter Conversion Therapy

// the code below takes the  cells from the array and testing to see if it is equal to the classes circle and dashes and x's for the computer then checks to see if turn is odd to assign computer the points and letter
// let tttBoard = Array.from($(".cellBOne"));
// let RowStringComp = "";
// tttBoard.forEach((cell, i) => {
//   if (cell.classList[1] === "circle") RowStringComp += ".";
//   if (cell.classList[1] === "dash") RowStringComp += "_";
//   if (cell.classList[1] === "square") RowStringComp += "X";
// });
// console.log(RowStringComp);
// let matchTwo = wordMatch.find((str) => {
//     return RowStringComp === str;
//   });

//   // the below code resets the baord when a match is found for the computer
//   if (matchTwo) {
//     alert(RowStringComp + "Computer match!");
//     tttBoard.forEach((cell, i) => {
//       if (cell.classList[2] === "circle") cell.classList.remove("circle");
//       if (cell.classList[2] === "dash") cell.classList.remove("dash");
//       if (cell.classList[2] === "square") cell.classList.remove("square");
//     });
//     // checking for if match is true and it is the players turn, then adding points to the player and assigning letter to the player.
//     // if (match = true && turn % 2 === 0) {
//     //     // RowString ==
//     // })
//     console.log("match");
//     console.log(match);
//   }

//the below code takes the charcodes object array and matches it to key of the key value pairs of the object, and spits back the matching letter.
// console.log(Object.keys(charCodes));
// let morseMatch = "";
// Object.keys(charCodes).forEach((mCodes) => {
//   console.log(charCodes[mCodes]);
//   if (RowStringComp === charCodes[mCodes]) morseMatch = mCodes;
// });
// console.log(morseMatch);
