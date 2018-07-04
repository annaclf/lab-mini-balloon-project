var startButton = document.getElementById('start-btn');
var balloonBoard = document.getElementById('balloon-board');
var balloonBtn = document.getElementById('balloon');
var balloonInMovement = document.getElementsByClassName('')
var counterSpan = document.querySelector('#counter span');
console.log(counterSpan);
var counter = 0;

function getBallonBoard(){
  balloonBoard.setAttribute('class','balloon-board open');
  createBalloons();
}
function clickBalloon(){
  balloonBtn.addEventListener('click',moveBalloon);
}
function moveBalloon(){
  var self = this;
  self.setAttribute('class','balloon flyUp');
  deleteBalloon(self);
}
function reverseBalloon(){
  var self = this;
  self.setAttribute('class','balloon forceFlyUp');
}
function createBalloons(){
  var setIntervalId = setInterval(function(){
    addBalloon();
  },2000);
}
function addBalloon(){
  var balloon = new Balloon();
  var balloonDiv = document.createElement('div');
  balloonDiv.className = balloon.className;
  balloonDiv.id = balloon.id;
  balloonDiv.setAttribute('style', `background-color: ${balloon.color}; left: ${balloon.positionLeft}%`);
  balloonDiv.addEventListener('click',moveAndDelete);
  balloonBoard.appendChild(balloonDiv);
}
function moveAndDelete(e){
  counter++;
  counterSpan.innerHTML = counter;
  var currentBalloon = e.currentTarget;
  currentBalloon.className += ' splash';
  var posLeft = currentBalloon.offsetLeft;

  posLeft > 500 ? currentBalloon.setAttribute("style", 'left:-120%') : currentBalloon.setAttribute("style", 'left:120%');

  setTimeout(function(){
    currentBalloon.parentNode.removeChild(currentBalloon);
  },2000);
}
startButton.addEventListener('click',getBallonBoard);

clickBalloon();