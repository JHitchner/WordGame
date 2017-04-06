
var murderMuppets =['gonzo','kermit','fozzie'];
var index= 0;
var currentGame =murderMuppets[index];
var label =document.getElementById('label');
var myBoard = document.getElementById('boardSize');
var imageContainer = document.getElementById('images');
var gonzo =document.getElementById('one');
var kermit =document.getElementById('two');
var fozzie =document.getElementById('three');
var formSub =document.getElementById('form');
var input =document.getElementById('playerInput');
var wrongX =document.getElementById('wrongX');
var clueBtnOne =document.getElementById('clueBtn');
var clues =document.querySelectorAll('.clues');
var cluesDiv =document.getElementById('cluesDiv');
var startBtn =document.getElementById('start');
var storyModal =document.getElementById('story');
var winModal =document.getElementById('winModal');
var loseModal =document.getElementById('loseModal');
var nextGame =document.getElementById('nextGame');
var winCounter =[];
var loseCounter =[];
var currentClue = clues[index];


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
  }
}
  function checkInput(input) {
    for(var i = 0; i < currentGame.length; i++) {
      if(currentGame.charAt(i) == input) {
        document.getElementsByClassName('board')[i].innerHTML=input;
        winCounter.push(1);
        winState(winCounter);
      }
    }
  if(currentGame.includes(input) == false) {
    console.log(input);
    wrongX.style.display = 'block';
    loseCounter.push(1);
    loseState(loseCounter);
    }
}
function winState(winCounter) {
  if(winCounter.length == currentGame.length){
    var gameNext = window.setTimeout(nextGamePopUp, 500);
  }
}
function loseState(loseCounter) {
 if(loseCounter.length >= 7) {
   var gameLose = window.setTimeout(loseModalPopUp, 0);
  }
}
function newGame() {
  while (myBoard.hasChildNodes()){
    myBoard.removeChild(myBoard.lastChild);
  };
  index++;
  winCounter = [];
  loseCounter = [];
  if(index >= 3) {
     var gameWon = window.setTimeout(winModalPopUp, 0);
      currentClue.style.display='none';
      gonzo.style.display = 'block';
      kermit.style.display = 'block';
      fozzie.style.display = 'block';
      imageContainer.style.display = 'block';
  }else if (index < 3) {
    createBoard(index);
  }
}
function introModal() {
  storyModal.style.display = 'block';
}
function winModalPopUp() {
  winModal.style.display = 'block';
}
function loseModalPopUp() {
  loseModal.style.display = 'block';
}
function nextGamePopUp() {
  nextGame.style.display = 'block';
}
storyModal.addEventListener("click", function(){
 storyModal.style.display = 'none';
})
nextGame.addEventListener("click", function(){
 newGame();
 nextGame.style.display = 'none';

})
startBtn.addEventListener("click",function(e) {
  e.preventDefault();
  var intro = window.setTimeout(introModal, 1000);
  console.log("this is working");
  createBoard(index);
})
clueBtnOne.addEventListener("click", function(e){
  e.preventDefault();
  currentClue.style.display='block';
})
formSub.addEventListener("keydown",function(e) {
  if(e.keycode == 13 || e.which == 13) {
    e.preventDefault();
    checkInput(input.value);
    document.forms['form'].reset();
    }
})
document.addEventListener("keypress", function(){
    wrongX.style.display = 'none';
})
