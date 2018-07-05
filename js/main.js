var body = document.getElementsByTagName('body')[0];
var startButton = document.getElementById('start-btn');
var balloonBoard = document.getElementById('balloon-board');
var balloonBtn = document.getElementById('balloon');
var balloonInMovement = document.getElementsByClassName('')
var counterSpan = document.querySelector('#counter span');
var counter = 0;
var level = 1;
var setIntervalId = undefined;


function startGame(){

  body.classList.toggle('playing');
  balloonBoard.classList.toggle('open');
  startButton.classList.toggle('stop');
  
  if(!document.body.classList.contains('playing')){
    setStartButton();
  }
  else{
    setStopButton();
    createBalloons();
  }
}
function setStopButton(){
  startButton.innerHTML = 'STOP';
}
function setStartButton(){
  startButton.innerHTML = 'START';
  counter = 0;
  counterSpan.innerHTML = counter;
  body.setAttribute('style','');
  balloonBoard.innerHTML = "";
  clearInterval(setIntervalId);
}
function clearDom(){
  console.log('clear');
}
function end(){
  
  setStartButton();
  clearDom();
  //location.reload();
}
function addBalloon(){
  var balloon = new Balloon();
  var balloonDiv = document.createElement('div');
  balloonDiv.className = balloon.className;
  balloonDiv.id = balloon.id;
  balloonDiv.setAttribute('style', `background-color: ${balloon.color}; left: ${balloon.positionLeft}%`);
  balloonDiv.addEventListener('click',moveAndDelete);
  balloonBoard.appendChild(balloonDiv);
  level = checkLevel(counter);
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
var generateRandomClass = function(arr){
  var randomNum = Math.floor(Math.random() * arr.length);
  var randomClass = arr[randomNum];
  return randomClass;
}
function createBalloons(){
  setIntervalId = setInterval(function(){
    addBalloon();
  },1000);
}

function checkLevel(counter){
  if(counter % 5 === 0){
    level++;
  }
  return level;
}
function moveAndDelete(e){
  var classArr = ['left:-120%','left:120%'];
  var currentBalloon = e.currentTarget;
  var posLeft = currentBalloon.offsetLeft;
  var trashPos = generateRandomClass(classArr);
  counter++;
  if(counter >= 10){
    body.setAttribute('style','background:#000;opacity:.7;');
  }
  if(counter === 20){
    end();
  }
  counterSpan.innerHTML = counter;
  currentBalloon.className += ' splash';

  currentBalloon.setAttribute("style", trashPos);

  if(setIntervalId){
    setTimeout(function(){
      currentBalloon.parentNode.removeChild(currentBalloon);
    },2000);
  }
  
}


startButton.addEventListener('click',startGame);

clickBalloon();


//big balloon
/*
var self = this;
  self.setAttribute('class','balloon flyUp');
  counter+=10;
  counterSpan.innerHTML = counter;
**/