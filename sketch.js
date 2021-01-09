
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

function preload()
{
	
}

function setup() {
	createCanvas(1550, 900);
	
	engine = Engine.create();
	world = engine.world;
  
  //level 1//
	block1 = new Box(800,700,30,30);
	block2 = new Box(830,700,30,30);
	block3 = new Box(860,700,30,30);
	block4 = new Box(890,700,30,30);
  block5 = new Box(920,700,30,30);
  
  //level 2//
	block6 = new Box(815,670,30,30);
	block7 = new Box(845,670,30,30);
	block8 = new Box(875,670,30,30);
  block9 = new Box(905,670,30,30);
  fill("red");
  
  //level 3//
	block10 = new Box(830,640,30,30);
	block11 = new Box(860,640,30,30);
  block12 = new Box(890,640,30,30);
  fill("yellow");
  
  //level 4//
	block13 = new Box(845,610,30,30);
  block14 = new Box(875,610,30,30);
  fill("pink");
  

  //level 5//
  block15 = new Box(860,580,30,30);
  fill(255,110,0);
  
  ground = new Ground(850,720,300,10);
  polygon = new Paper(200,900,20,20);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  ground.display();
  polygon.display();
 
}



