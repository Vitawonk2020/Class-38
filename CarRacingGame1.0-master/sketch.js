var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Car1,Car2,Car3,Car4;

var Cars;

function setup(){
  canvas = createCanvas(displayWidth-170, displayHeight-120);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  Car1=createSprite(100,200);
  Car2=createSprite(250,200);
  Car3=createSprite(400,200);
  Car4=createSprite(550,200);
  Cars=[Car1,Car2,Car3,Car4];
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    drawSprites();
  }
  
}
