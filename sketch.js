const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas, bg;

var gameState = 0;
var playerCount;

var database;
  
var form, player, game;

var allPlayers;

function preload(){
  bg = loadImage("images/bg.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  engine = Engine.create();
  world = engine.world;
  
  database = firebase.database();
  game = new Game();
  game.gameState();
  game.start();

  Engine.run(engine);
}


function draw(){
  if(playerCount === 6){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

