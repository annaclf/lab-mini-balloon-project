var startButton = document.getElementById('start-btn');
var balloonBoard = document.getElementById('balloon-board');
var balloonBtn = document.getElementById('balloon');
var balloonInMovement = document.getElementsByClassName('')

function getBallonBoard(){
  balloonBoard.setAttribute('class','balloon-board open');
  createBalloons();
}
function clickBalloon(){
  balloonBtn.addEventListener('click',splashBalloon);
}
function clickBalloonInMovement(){
  balloonBtn.addEventListener('click',reverseBalloon);
}
function splashBalloon(){
  var self = this;
  self.setAttribute('class','balloon flyUp');
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
  balloonDiv.setAttribute("style", `background-color: ${balloon.color}; left: ${balloon.positionLeft}%`);
  balloonDiv.addEventListener('click',splashBalloon);
  balloonBoard.appendChild(balloonDiv);
}


// function(){
//   var balloon = new Balloon();
//   var balloonDiv = document.createElement('div');
//   balloonDiv.className = balloon.className;
//   balloonDiv.id = balloon.id;
//   balloonDiv.setAttribute("style", `background-color: ${balloon.color}; left: ${balloon.positionLeft}%`);
//   balloonBoard.appendChild(balloonDiv);
// }

startButton.addEventListener('click',getBallonBoard);
clickBalloon();