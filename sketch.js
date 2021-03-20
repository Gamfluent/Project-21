var canvas;
var music;
var redBox, blueBox, greenBox, yellowBox;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redBox = createSprite(100, 590, 200, 20);
    blueBox = createSprite(310, 590, 200, 20);
    greenBox = createSprite(520, 590, 200, 20);
    yellowBox = createSprite(730, 590, 200, 20);

    redBox.shapeColor = "red";
    blueBox.shapeColor = "blue";
    greenBox.shapeColor = "green";
    yellowBox.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(random(20, 750), 400, 20, 20);
    box.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    box.velocityY = box.velocityY + 0.8;

    //add condition to check if box touching surface and make it box
    if(redBox.isTouching(box) && box.bounceOff(redBox)){
        box.shapeColor = "red";
    }

    if(blueBox.isTouching(box) && box.bounceOff(blueBox)){
        box.shapeColor = "blue";
    }

    if(yellowBox.isTouching(box) && box.bounceOff(yellowBox)){
        box.shapeColor = "yellow";
    }

    if(greenBox.isTouching(box) && box.bounceOff(greenBox)){
        box.shapeColor = "green";
    }

    if(keyDown("left")){
        box.x = box.x-5;
    }

    if(keyDown("right")){
        box.x = box.x+5;
    }

    drawSprites();

}
