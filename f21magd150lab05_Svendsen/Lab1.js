var x, y;
var xSpeed;
var ySpeed;
var swidth, sheight;
var twidth, theight;
var bwidth, bheight;
var sx, sy;
var tx, ty;
var bx, by;
var cbx, cby, cr;
var c1, c2, c3;

function setup() {
    createCanvas(1275, 650);
    frameRate(60);
    rx = width / 2;
    ry = height / 2;
    x = random(437, 837);
    y = random(125, 475);
    xSpeed = random(1, 10);
    ySpeed = random(1, 10);
    swidth = 400;
    sheight = 350;
    sx = width / 2;
    sy = 300;
    tx = width / 2;
    ty = height / 2;
    twidth = 450;
    theight = 450;
    bx = 500;
    by = 510;
    bwidth = 100;
    bheight = 50;
    cbx = 800;
    cby = 510;
    cr = 50;
}


function draw() {
    background(100);
    fill(255);
    rectMode(CENTER);
    rect(tx, ty, twidth, theight);
    

    rectMode(CORNER);
    
    line(500, 550, 450, 640);
    line(775, 550, 825, 640);
    line(width / 2, 100, 770, 10);
    line(width / 2, 100, 530, 10);
    
    rectMode(CENTER);
    rect(sx, sy, swidth, sheight);

    if (rectOver(bx,by,bwidth,bheight)) {
        fill(0);
    }
    else {
        fill(255);
    }
    rect(bx, by, bwidth, bheight);

    if (circleOver(cbx, cby, cr)) {
        fill(0);
    }
    else {
        fill(255);
    }
    ellipse(cbx, cby, cr, cr);

    fill(255);
    if (mousePressedR()) {
        c1 = random(0, 255);
        c2 = random(0, 255);
        c3 = random(0, 255);
        fill(c1,c2,c3);
    } else {
        fill(255, 0, 0);
    }

    if (mousePressedC()) {
        rect(x, y, 50, 50);
    } else {
        ellipse(x, y, 50, 50);
    }

    x += xSpeed;
    y += ySpeed;

    
    //
    if (x <= 470 || x > 810) {
        xSpeed *= -1;
    }
    if (y <= 150 || y > 450) {
        ySpeed *= -1;
    }
    textSize(20);
    text("Color", 515, 515, 80, 30);
    textSize(15);
    text("Shape", 799, 520, 40, 40);
}

function rectOver(bx, by, bwidth, bheight) {
    if (mouseX >= bx - bwidth / 2 && mouseX <= bx + bwidth / 2 && mouseY >= by - bheight / 2 && mouseY <= by + bheight / 2) {
        return true;
    } else {
        return false;
    }
}

function circleOver(cbx, cby, cr) {
    if (mouseX > cbx - cr / 2 && mouseX < cbx + cr / 2 && mouseY > cby - cr / 2 && mouseY < cby + cr / 2) {
        return true;
    } else {
        return false;
    }
}

function mousePressedC() {
    if (mouseX > cbx - cr / 2 && mouseX < cbx + cr / 2 && mouseY > cby - cr / 2 && mouseY < cby + cr / 2 && mouseIsPressed) {
        return true;
    } else {
        return false;
    }
}

function mousePressedR() {
    if (mouseX >= bx - bwidth / 2 && mouseX <= bx + bwidth / 2 && mouseY >= by - bheight / 2 && mouseY <= by + bheight / 2 && mouseIsPressed) {
        return true;
    } else {
        return false;
    }
}