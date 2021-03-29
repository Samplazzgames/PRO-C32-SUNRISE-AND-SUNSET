const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    getBackgroundImg()
    if(backgroundImg){
    background(backgroundImg);
    }


    Engine.update(engine);

    text('TIME:' + hour , width - 600 , 200)


}

async function getBackgroundImg(){
    var response = await fetch('https://worldtimeapi.org/api/timezone/Asia/kolkata');
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11 , 13);
    console.log(hour);

   

    if(hour >= 0 && hour <= 2){
        bgImg = 'sunrise1.png'        
    }else if(hour >= 2 && hour <= 4){
        bgImg = 'sunrrise2.png'
    }else if(hour >= 4 && hour <= 6){
        bgImg = 'sunrrise3.png'
    }else if(hour >= 6 && hour <= 8){
        bgImg = 'sunrrise4.png'
    }else if(hour >= 8 && hour <= 10){
        bgImg = 'sunrrise5.png'
    }else if(hour >= 10 && hour <= 12){
        bgImg = 'sunrrise6.png'
    }else if(hour >= 12 && hour <= 14){
        bgImg = 'sunrrise7.png'
    }else if(hour >= 16 && hour <= 18){
        bgImg = 'sunrrise8.png'
    }else if(hour >= 18 && hour <= 20){
        bgImg = 'sunrrise9.png'
    }else if(hour >= 20 && hour <= 22){
        bgImg = 'sunrrise10.png'
    }else if(hour >= 22 && hour <= 0){
        bgImg = 'sunrrise11.png'
    }


    backgroundImg = loadImage(bgImg);

}
