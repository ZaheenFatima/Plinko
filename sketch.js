const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var partiicles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,800,480,20);
 

 
  for(var j = 0; j<=400; j = j+50){
     plinkos.push(new Plinko(j,75));
   }
 

}

function draw() {
  background("Black");  
  drawSprites();

  ground.display();


}