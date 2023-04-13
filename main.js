function preload(){}

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(750,210);
    video=createCapture(VIDEO);
    video.size(560,700);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotpose);
}

function draw(){}

function modelLoaded(){
    console.log("modelloaded");
}

function gotpose(result){
    if(result.length > 0){
        console.log(result);
    }
}