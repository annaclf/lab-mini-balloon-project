//Create Balloon object

function Balloon(){
  this.color = this.generateRandomColor();
  this.positionLeft = this.generateRandomNum();
  this.id = "balloon";
  this.speed = 1;
  this.className = 'balloon moving';
}
Balloon.prototype.generateRandomColor = function(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
Balloon.prototype.generateRandomNum = function(){
  return Math.floor(Math.random()*90);
}