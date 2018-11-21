var value = 0;
var speed = 0;
var right = 0;

var myImage1;
var myImage2;
var myImage3;
var myImage4;
var myImage5;
var myImage0;
var myImage6;

var mySnow = [];
var mySong;

function preload(){
  myImage0 = loadImage('./assets/sled.png');
  myImage1 = loadImage('./assets/pres1.png');
  myImage2 = loadImage('./assets/pres2.png');
  myImage3 = loadImage('./assets/pres3.png');
  myImage4 = loadImage('./assets/pres4.png');
  myImage5 = loadImage('./assets/pres5.png');
  myImage6 = loadImage('./assets/wintercity.png');
  mySong = loadSound('./assets/Jingle Bells 3.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  setShakeThreshold(10);
  frameRate(12);
  mySong.play();

  for (var i=0; i<300; i++){
  var b = new Snow(random(width), random(height), random(2, 10));
  mySnow.speed = random(1,10);
  mySnow.push(b);
}
}

function draw() {
  background(202,225,255);
  image(myImage0,width/3.5,0, myImage0.width/1.7, myImage0.height/1.7);
  image(myImage6,0,height/1.8, myImage6.width, myImage6.height);
  var myText = 'Shake your device to let the presents fall from the sled'
  textFont('Lobster');
  textAlign(CENTER);
  textSize(30);
  fill(255)
  text(myText, width/2,height/1.9);

  for(var i=0; i<mySnow.length; i++){
    mySnow[i].move();
    mySnow[i].display();
  }

  if (value > 3){
    image(myImage1,width/2,speed, myImage1.width/2, myImage1.height/2);
    image(myImage2,(width/2)+right,speed, myImage2.width/2, myImage2.height/2);
    image(myImage3,(width/2)-right,speed+5, myImage3.width/2, myImage3.height/2);
    image(myImage4,(width/2)+1.5*right,speed+10, myImage4.width/2, myImage4.height/2);
    image(myImage5,(width/2)-1.5*right,speed+8, myImage5.width/2, myImage5.height/2);
  }
}

function deviceShaken() {
  value = value + 1;
  speed = speed + 7;
  right = right + 2;
}

function Snow(_x, _y, _diameter) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;

  this.color = 255;
  this.speed = 2;

  this.move = function() {
     this.y += this.speed;
  }

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    noStroke();
  }
}
