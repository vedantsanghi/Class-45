var database;
var name, password;
var playetCount;
var button, button1, button2, button3, button4, button5;

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  // createSprite(400, 200, 50, 50);
  form = new Form()
}

function draw() {
  background(255,255,255);  
  form.display()
  drawSprites();
}