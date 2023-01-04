

let ballArray;

function setup() {
  createCanvas(800, 600);
  
  
  ballArray = [];

  for (let i = 0; i<6; i +=1) {
    let b = new Ball();
    ballArray.push(b);
  }

}

function draw() {

  drawBackground();

  for (let i = 0; i<ballArray.length; i+= 1){
    ballArray[i].move();
    ballArray[i].render();
  }
  
}


function drawBackground() {
  // Clear the background
  background(80);
}






class Ball {
  constructor(){
    this.positionX = random(100, width-100);
    this.positionY = random(50, height/2);
    this.velocityX = 4;
    this.velocityY = 7;
    this.radius = 25;
    this.size = this.radius * 2;
    this.ballR = random(0,240);
    this.ballG = random(0,240);
    this.ballB = random(0,240);
    this.gravity = 1.0;
    this.bounciness = 0.98;

  }

move(){
//Move the Ball
  this.velocityY += this.gravity;
  this.positionX = this.positionX + this.velocityX;
  this.positionY = this.positionY + this.velocityY;

  const rightEdge = width;
  const leftEdge = 0;
  const topEdge = 0;
  const bottomEdge = height;
  
  // code to check if we hit right or left side
  if (this.positionX + this.radius >= rightEdge) {
    // bounce off the right edge
    this.positionX = rightEdge - this.radius;
    this.velocityX = this.velocityX * -this.bounciness;
    this.velocityY = this.velocityY * this.bounciness;
  }
  else if (this.positionX - this.radius <= leftEdge) {
    // bounce off the left edge
    this.positionX = leftEdge + this.radius;
    this.velocityX = this.velocityX * -this.bounciness;
    this.velocityY = this.velocityY * this.bounciness;
  }
  
  // code to check if we hit top or bottom
  if (this.positionY + this.radius >= bottomEdge) {
    // bounce off the bottom
    this.positionY = bottomEdge - this.radius;
    this.velocityY = this.velocityY * -this.bounciness;
    this.velocityX = this.velocityX * this.bounciness;
  }
  else if (this.positionY - this.radius <= topEdge) {
    // bounce off the top
    this.positionY = topEdge + this.radius;
    this.velocityY = this.velocityY * -this.bounciness;
    this.velocityX = this.velocityX * this.bounciness;
  }
}

render(){
  stroke(0);
  fill(this.ballR, this.ballG, this.ballB);
  ellipse(this.positionX,this.positionY,this.size,this.size);
}
}