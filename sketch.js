var ball, box1, box2, box3, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	wall1=createSprite(600,600,200,20);
	wall1.shapeColor=color(255,0,0);

	wall2=createSprite(500,560,20,100);
	wall2.shapeColor=color(255,0,0)

	wall3=createSprite(710,560,20,100);
	wall3.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = Bodies.circle(200 , 450 , 10 , {restitution:0.3, isStatic:false, friction:0.5, density:0.2});
	World.add(world, ball);

	ground = Bodies.rectangle(600, 650, 40, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1 = Bodies.rectangle(width/2,580,width,10,{isStatic:true});
	 World.add(world,wall1);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

	Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ellipse(ball.position.x, ball.position.y, 20,20);
 // console.log(ball.body.position.x);
  console.log(ball.position.x);

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.position,{x:85,y:-85})
	}
}


