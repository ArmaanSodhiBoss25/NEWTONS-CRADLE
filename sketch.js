
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	roof = new Roof(400,600,200,20);
	bobObject1 = new Bob(300,400,5);
	bobObject2 = new Bob(325,400,5);
	bobObject3 = new Bob(350,400,5);
	bobObject4 = new Bob(375,400,5);
	bobObject5 = new Bob(340,400,5);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



