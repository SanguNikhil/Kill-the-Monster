
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("gamingbackground2.png");
}

function setup() {
	createCanvas(900,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (200, 400, 600, 5);
  superhero = new Hero(400,3,100,100);
  attach = new Rope(superhero.body,{x:100,y:465});
  box1 = new Box(280,350,30,40);  
  box2 = new Box(310,350,30,40);
  box3 = new Box(340,350,30,40);
  box4 = new Box(370,350,30,40);
  box5 = new Box(400,350,30,40);
  box6 = new Box(430,350,30,40);
  box7 = new Box(460,350,30,40);
  box8 = new Box(490,350,30,40);
  box9 = new Box(310,315,30,40);
  box10 = new Box(340,315,30,40);
  box11 = new Box(370,315,30,40);
  box12 = new Box(400,315,30,40);
  box13 = new Box(430,315,30,40);
  box14 = new Box(460,315,30,40);
  monster = new Monster(380,200,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  monster.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}


