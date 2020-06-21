var ground1;
var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var bobDiameter=10;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ground1=new Ground()

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	Engine.run(engine);
   bobObject1=new bob(150,350)
   bobObject2=new bob(170,350)
   bobObject3=new bob(190,350)
   bobObject4=new bob(210,350)
   bobObject5=new bob(230,350)

   rope1=new rope(bobObject1.body,ground1.body,-bobDiameter*2,0)
   rope2=new rope(bobObject2.body,ground1.body,-bobDiameter*2,0)
   rope3=new rope(bobObject3.body,ground1.body,-bobDiameter*2,0)  
   rope4=new rope(bobObject4.body,ground1.body,-bobDiameter*2,0)
   rope5=new rope(bobObject5.body,ground1.body,-bobDiameter*2,0)
}


function draw() {
  background(0);
  ground1.display();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  keyPressed();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }
}

