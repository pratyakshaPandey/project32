const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23;
var box24,box25;
var polygon , polygon_img;
var slingshot;
var score = 0;
var backgroundImg;

function preload (){
    getBgImg();
}


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    // bodies
ground1 = new ground(540,400,240,10);
ground2 = new ground(860,150,220,10);
// bottom
box1 = new box(480,370,30,40);
box2 = new box(500,370,30,40);
box3 = new box(520,370,30,40);
box4 = new box(540,370,30,40);
box5 = new box(560,370,30,40);
box6 = new box(580,370,30,40);
box7 = new box(600,370,30,40);

// 2nd layer
box8 = new box(500,340,30,40);
box9 = new box(520,340,30,40);
box10 = new box(540,340,30,40);
box11 = new box(560,340,30,40);
box12 = new box(580,340,30,40);

//3rd layer
box13 = new box(520,310,30,40);
box14 = new box(540,310,30,40);
box15 = new box(560,310,30,40);
box16 = new box(540,270,30,40);

//polygon
polygon = new Polygon(200,200,40,40);
slingshot = new slingShot(polygon.body,{x:200,y:200});
// 2nd pyramid
//bottom
box17 = new box(810,130,30,40);
box18 = new box(830,130,30,40);
box19 = new box(850,130,30,40);
box20 = new box(870,130,30,40);
box21 = new box(890,130,30,40);

//2nd layer
box22 = new box(830,100,30,40);
box23 = new box(850,100,30,40);
box24 = new box(870,100,30,40);
box25 = new box(850,70,30,40);

}

function draw(){
    if(backgroundImg){
    background(backgroundImg)
    Engine.update(engine);
    rectMode(CENTER)
    ground1.display();
    ground2.display();
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
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    polygon.display();
    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    drawSprites();
    noStroke()
    textSize(30)
    fill ("white");
    text ("score:"+ score,width-300,50);
}
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
 }
 
 function mouseReleased(){
    slingshot.fly();
 }

 function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

async function getBgImg(){
    var response  = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON  = await response.json();
  //  console.log(responseJSON);

    var dt = responseJSON.datetime
   // console.log(dt);
    var rx = dt.slice(11,13);
    console.log(rx);
    if(rx >= 6 && rx <= 18){
         bg = "day.jpg"
    }else{
        bg = "night.png"
    }
    backgroundImg = loadImage (bg);

    
    
    
    
}