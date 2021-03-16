
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1, ball2, ball3, ball4, ball5
var chain1, chain2, chain3, chain4, chain5



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
stand = new stand(380, 200, 600, 30)
ball1= new ball(220, 550, 25 )
ball2= new ball(280, 550, 25 )
ball3= new ball(340, 550, 25 )
ball4= new ball(400, 550, 25 )
ball5= new ball(460, 550, 25 )

chain1= new Chain(ball1.body, {x:220, y:215} )
chain2= new Chain(ball2.body, {x:280, y:215} )
chain3= new Chain(ball3.body, {x:340, y:215} )
chain4= new Chain(ball4.body, {x:400, y:215} )
chain5= new Chain(ball5.body, {x:460, y:215} )
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
}

function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})


}


