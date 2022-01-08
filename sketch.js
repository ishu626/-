const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world
var umbrella
var drops=[];
var maxdrops=100;
function preload(){
    
}

function setup(){
   engine=Engine.create();
   world=engine.world;
   createCanvas(400,700);
    umbrella=new Umbrella(200,550);
    if(frameCount%150===0){
        for(var i=0;i<maxdrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)))

        }
    }
}

function draw(){
    Engine.update(engine);
    background(0);
    umbrella.display();
    for(var i=0;i<maxdrops;i++){
        drops[i].display();
        drops[i].update();
}   
}
