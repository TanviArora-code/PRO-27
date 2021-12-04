
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,bob, bob2, bob3, bob4, bob5,rope1,rope2, rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,550,50);
	bob = new Bob(400,600);
	bob2 = new Bob(300,600);
	bob3 = new Bob(200,600);
	bob4 = new Bob(500,600);
	bob5 = new Bob(600,600);

	rope1 = new Rope(bob.body,roof.body,0,0);
	World.add(world, rope1);
	
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	World.add(world, rope2)

	rope3 = new Rope(bob3.body,roof.body,-200,0);
	World.add(world, rope3);

	rope4 = new Rope(bob4.body,roof.body,+100,0);
	World.add(world,rope4);

	rope5 = new Rope(bob5.body,roof.body,+200,0);
	World.add(world, rope5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
roof.display();
bob.display();
bob2.display(); 
bob3.display();  
bob4.display(); 
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display(); 
}



