// All my variables

var label =document.getElementById('label');
var myBoard =document.getElementById('boardSize');
var imageContainer =document.getElementById('images');
var gonzo =document.getElementById('one');
var kermit =document.getElementById('two');
var fozzie =document.getElementById('three');
var formSub =document.getElementById('form');
var input =document.getElementById('playerInput');
var wrongX =document.getElementById('wrongX');
var clueBtnOne =document.getElementById('clueBtn');
var clues =document.querySelectorAll('.clues');
var cluesDiv =document.getElementById('cluesDiv');
var submitBtn =document.getElementById('submit');
var startBtn =document.getElementById('start');
var storyModal =document.getElementById('story');
var winModal =document.getElementById('winModal');
var loseModal =document.getElementById('loseModal');
var nextGame =document.getElementById('nextGame');
var murderMuppets =['gonzo','kermit','fozzie'];
var index= 0;
var currentGame =murderMuppets[index];
var winCounter =[];
var loseCounter =[];
var currentClue = clues[index];


// Creates the board depending on the length of the first element in the array.
function createBoard(word) {
  currentGame = murderMuppets[word];
  currentClue = clues[word];
  for( var i = 0; i < currentGame.length; i++) {
    boardSize = document.createElement('div');
    boardSize.className = 'board';
    myBoard.appendChild(boardSize);
    startBtn.style.visibility = 'hidden';
    input.style.display = 'block';
    label.style.display = 'block';
    submitBtn.style.display = 'block';
  }
}
// Takes the player's input and compares it to the first element of the train. If it exists write to the innerHTML and push 1 to the winCounter array. Check
function checkInput(input) {
  for(var i = 0; i < currentGame.length; i++) {
    if(currentGame.charAt(i) == input) {
      document.getElementsByClassName('board')[i].innerHTML=input;
      winCounter.push(1);
      winState(winCounter);
    }
  }
//If the player's input does not exist in the first element of the array display wrongX and push 1 to the lose counter.
  if(currentGame.includes(input) == false) {
    wrongX.style.display = 'block';
    loseCounter.push(1);
    loseState(loseCounter);
    }
}
//  Player has guessed all correctly. If winCounter length is = to length of the first emelent in the array display gameNext modal.
function winState(winCounter) {
  if(winCounter.length == currentGame.length) {
    var gameNext = window.setTimeout(nextGamePopUp,500);
  }
}
// If the loseCounter length is >= 7 dsiplay lose modal.
function loseState(loseCounter) {
  if(loseCounter.length >= 7) {
    var gameLose = window.setTimeout(loseModalPopUp,0);
  }
}
// After first game solved remove the current board and clear the win and lose counters.
// Increase the index to change to the next element of the array. Check to see if the index is >= 3. If it is the game is won and display winModal and muppet images.
function newGame() {
  while (myBoard.hasChildNodes()) {
    myBoard.removeChild(myBoard.lastChild);
  };
  index++;
  winCounter = [];
  loseCounter = [];
  if(index >= 3) {
    var gameWon = window.setTimeout(winModalPopUp,0);
      currentClue.style.display='none';
      gonzo.style.display = 'block';
      kermit.style.display = 'block';
      fozzie.style.display = 'block';
      imageContainer.style.display = 'block';
  }else if (index < 3) {
    createBoard(index);
  };
};
// All my modal functions to display when called
function introModal() {
  storyModal.style.display = 'block';
};
function winModalPopUp() {
  winModal.style.display = 'block';
};
function loseModalPopUp() {
  loseModal.style.display = 'block';
};
function nextGamePopUp() {
  nextGame.style.display = 'block';
};
// All of my EventListeners
storyModal.addEventListener("click", function() {
 storyModal.style.display = 'none';
});
nextGame.addEventListener("click", function() {
 newGame();
 nextGame.style.display = 'none';
});
startBtn.addEventListener("click",function(e) {
  e.preventDefault();
  var intro = window.setTimeout(introModal, 1000);
  createBoard(index);
});
// Displays clues on button click
clueBtnOne.addEventListener("click", function(e) {
  e.preventDefault();
  currentClue.style.display='block';
});
// Uses Enter Key to submit player input and resets input form.
formSub.addEventListener("keydown",function(e) {
  if(e.keycode == 13 || e.which == 13) {
    e.preventDefault();
    checkInput(input.value);
    document.forms['form'].reset();
  };
});
submitBtn.addEventListener("click",function(e) {
    e.preventDefault();
    checkInput(input.value);
    document.forms['form'].reset();
});
// Hides the "wrong" display when new key is entered.
document.addEventListener("keypress", function() {
    wrongX.style.display = 'none';
});
