//Getting started. Simple stuff

function setup() {
    createCanvas(1275, 650);
    background(150);
}

function draw() {
    //draw the lines from the sun
    strokeWeight(1);
    strokeCap(SQUARE);
    line(1275, 0, 1000, 50);
    line(1275, 0, 1050, 100);
    line(1275, 0, 1100, 150);
    line(1275, 0, 1150, 200);
    line(1275, 0, 1200, 250);
    //set up sun
    ellipseMode(CORNER);
    ellipse(1100, -200, 1275, 400);
    noStroke();//sets up clouds
    ellipseMode(CENTER);//Middle set
    ellipse(400, 200, 100, 100);
    ellipse(475, 200, 100, 100);
    ellipse(425, 125, 100, 100);
    ellipse(500, 125, 100, 100);
    ellipse(350, 125, 100, 100);
    //right set
    ellipse(800, 150, 100, 100);
    ellipse(875, 150, 100, 100);
    ellipse(825, 75, 100, 100);
    ellipse(900, 75, 100, 100);
    ellipse(750, 75, 100, 100);
    //left set
    ellipse(100, 300, 100, 100);
    ellipse(175, 300, 100, 100);
    ellipse(125, 225, 100, 100);
    ellipse(200, 225, 100, 100);
    ellipse(50, 225, 100, 100);
    stroke(0);
    //far wing
    line(450, 50, 500, 0);
    line(550, 50, 500, 0);
    line(450, 50, 550, 50);
    //sets up plane
    ellipse(500, 50, 200, 50);
    //near wing
    line(450, 50, 500, 100);
    line(550, 50, 500, 100);
    line(450, 50, 550, 50);
    //back
    line(575, 34, 600, 0);
    line(600, 0, 600, 50);

    //sets up buildings
    strokeJoin(BEVEL);
    strokeWeight(20);
    rect(0, 200, 100, 450);
    rect(100, 400, 50, 250);
    rect(150, 500, 200, 150);
    rect(350, 100, 50, 550);
    rect(400, 475, 300, 175);
    rect(700, 50, 150, 600);
    rect(850, 250, 160, 400);
    rect(1010, 300, 365, 350);
    
    strokeCap(ROUND);
    strokeWeight(1);
    line(50, 50, 50, 200);
}