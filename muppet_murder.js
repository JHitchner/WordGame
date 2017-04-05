 // Left to do:If letter is not present turn letter chosen red and inner.HTML to bottom left of screen.
var murderMuppets =['gonzo','kermit','fozzie'];
var index= 0;
var currentGame =murderMuppets[index];
var label =document.getElementById('label')
var myBoard = document.getElementById('boardSize');
var body =document.getElementsByTagName('body');
var gonzo =document.getElementById('one')
var kermit =document.getElementById('two')
var fozzie =document.getElementById('three')
var formSub =document.getElementById('form');
var input =document.getElementById('playerInput');
var submitBtn =document.getElementById('submit');
var startBtn =document.getElementById('start');
var storyModal =document.getElementById('story')
var winCounter =[];
var loseCounter =[];


function createBoard(word) {
  currentGame = murderMuppets[word];
  for( var i = 0; i < currentGame.length; i++) {
    boardSize = document.createElement('div');
    boardSize.className = 'board';
    myBoard.appendChild(boardSize);
    startBtn.style.visibility = 'hidden'
    input.style.display = 'block'
    label.style.display = 'block'
  }
}
  function checkInput(input) {
    for(var i = 0; i < currentGame.length; i++) {
      if(currentGame.charAt(i) == input) {
        document.getElementsByClassName('board')[i].innerHTML= input;
        winCounter.push(1);
        winState(winCounter);
      }
    }
  if(currentGame.includes(input) == false) {
    console.log(input);
    var wrongLetters = [];
    wrongLetters.push(input);
    console.log(wrongLetters);
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
// function reveal() {
//   if (currentGame =murderMuppets[0]) {
//     gonzo.style.display = 'block';
//   }else if (currentGame = murderMuppets[1]) {
//     kermit.style.display = 'block'
//   }else if ( currentGame = mderMuppets[2]){
//     fozzie.style.display = 'block'
//   }
// }

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
      gonzo.style.display = 'block';
      kermit.style.display = 'block';
      fozzie.style.display = 'block';
  }else if (index < 3) {
    createBoard(index);
  }
}
function introModal() {
  storyModal.style.display = 'block'
}
storyModal.addEventListener("click", function(){
 storyModal.style.display = 'none'
})

submitBtn.addEventListener("click",function(e){
  checkInput(input.value);
  document.forms['form'].reset()
  e.preventDefault();
})
startBtn.addEventListener("click",function(e) {
  e.preventDefault();
  var timer = window.setTimeout(introModal, 1000);
  console.log("this is working");
  createBoard(index);
})
formSub.addEventListener("keydown",function(e) {
  if(e.keycode == 13 || e.which == 13) {
    e.preventDefault();
    checkInput(input.value);
    document.forms['form'].reset()
    }
})
