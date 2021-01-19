
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,ground,stone,boy,sling;


function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(1000,610,350,460);
	ground = new Ground(600,590,1270,30);
		
	boy = createSprite(200,515,50,50);
	boy.addImage(boyimage);
	boy.scale = 0.1;

	stone = new Stone(147,454,30);

	mango1 = new Mango(1000,140,30);
	mango2 = new Mango(1000,250,39);
	mango3 = new Mango(900,250,35);
	mango4 = new Mango(1090,140,38);
	mango5 = new Mango(1100,200,20);
	mango6 = new Mango(850,210,30);
	mango7 = new Mango(950,200,36);
	mango8 = new Mango(1050,230,30);
	mango9 = new Mango(940,110,45);

	sling =new Sling(stone.body,{x:147,y:454});


	Engine.run(engine);
  
}


function draw() {

background("lightblue");
Engine.update(engine);  

textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);

drawSprites();

tree.display();
ground.display();
stone.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();

sling.display();

detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);

 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
} 

function mouseReleased()
{
	sling.fly();
   
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:135, y:426}) 
	  sling.attach(stone.body);
	}
  }

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
