//Create Balloon object

function Balloon(){
  this.color = this.generateRandomColor();
  this.positionLeft = this.generateRandomNum();
  this.className = "balloon moving";
  this.id = "balloon";
  this.moving = true;
}
Balloon.prototype.generateRandomColor = function(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
Balloon.prototype.generateRandomNum = function(){
  return Math.floor(Math.random()*100);
}