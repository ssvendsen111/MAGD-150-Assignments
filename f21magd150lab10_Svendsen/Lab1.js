//the world map comes from https://cdn4.picryl.com/photo/1982/01/01/political-map-of-the-world-2-1024.jpg

let theta = 0;

function preload(){
    img = loadImage('Equal_Earth_projection_SW.jpg');
    img2 = loadImage('political-map-of-the-world-2-1024.jpg');
}

function setup() {
    createCanvas(500,500, WEBGL);
    x = 0;
    a=0;
    b=0;
}

function draw() {
    let cX = map(mouseX, 0, width, -300, 300);
    let cY = map(mouseY, 0 , height, -200,200);
    camera(cX, cY, (height/3) / 0.2, cX, cY, 0, 0, 5, 0);
    ambientLight(100);
    pointLight(250,250,250,mouseX,mouseY,10);
    background(0);
    //rotateX(theta * 0.1);
    rotateY(theta * 0.1);
    //rotateZ(theta * 0.1);

    texture(img2);
    sphere(50);
    
    fill(255);

    theta += 0.05;
  translate(140, 0, 0);
  push();

  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
    fill(211,0,0);
  sphere(60);
  pop();
  translate(480, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
    fill(255,100,0);
  sphere(100);
  pop();
  translate(600, 10, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(0,0,255);
  sphere(70);
  pop();


}

