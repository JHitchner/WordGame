 // Left to do:If letter is not present turn letter chosen red and inner.HTML to bottom left of screen. Remove child divs of previous game and find out why last letter entered is auto evaluated.
var murderMuppets =['gonzo','kermit','fozzie'];
var index= 0;
var currentGame =murderMuppets[index];
var myBoard = document.getElementById('boardSize');
var boardSize;
var wrongLetters  =document.getElementById('wrong_letters');
var formSub =document.getElementById('form');
var input =document.getElementById('playerInput');
var submitBtn =document.getElementById('submit');
var startBtn =document.getElementById('start');
var winCounter =[];
var loseCounter =[];
var body =document.getElementsByTagName('body');

function createBoard(word) {
  currentGame = murderMuppets[word];
  for( var i = 0; i < currentGame.length; i++) {
   boardSize = document.createElement('div');
   boardSize.className = 'board';
   myBoard.appendChild(boardSize);
  }
}
  function checkInput(input) {
  for( var i = 0; i < currentGame.length; i++) {
    if (currentGame.charAt(i) == input) {
      document.getElementsByClassName('board')[i].innerHTML= input;
      winCounter.push(1);
      winState(winCounter);
    }
  }
    if (currentGame.includes(input) == false) {
      console.log(input)
      console.log("letter not found");
     loseCounter.push(1);
     loseState(loseCounter);
    }
}
function winState(winCounter) {
  if(winCounter.length == currentGame.length){
    console.log("You have solved the mystery!");
    newGame();
  }
}
function loseState(loseCounter) {
 if(loseCounter.length >= 7) {
  console.log("you lose try again");
  }
}
function newGame() {
  while (myBoard.hasChildNodes()){
    myBoard.removeChild(myBoard.lastChild)
  }
  winCounter = [];
  loseCounter = [];
  index++;
  if(index >= 3) {
    console.log("You have named all the Muppet Murderers")
  }else if (index < 3) {
    createBoard(index);
  }
}
submitBtn.addEventListener("click",function(e){
     checkInput(input.value);
     document.forms['form'].reset()
     e.preventDefault();
 })
 startBtn.addEventListener("click",function(e) {
   e.preventDefault();
   createBoard(index);
 })
formSub.addEventListener("keydown",function(e) {
  if (e.keycode == 13 || e.which == 13) {
       e.preventDefault();
       }
})
