var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
/*
   center the position of the ball
*/

var x = canvas.width / 2;
var y = canvas.height - 30;

//speify the small value changes in the ball movement
var dx = 2;
var dy = -2;

//paddle position
var paddleWidth = 75;
var paddleHeight = 10;
var paddleX = canvas.width / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keydownHandler, false);
document.addEventListener("keyup", keyupHandler, false);

function keydownHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = true;
  } else if (e.keyCode === 37) {
    leftPressed = true;
  }
}

function keyupHandler(e) {
  if (e.keyCode === 39) {
    rightPressed = false;
  } else if (e.keyCode === 37) {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  }

  if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 20);
