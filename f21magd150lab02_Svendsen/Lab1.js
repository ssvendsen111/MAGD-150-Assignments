function setup() {
    createCanvas(1275, 650);
    background(0);
}

function draw() {
    triangle(375, 400, 525, 300, 525, 400);
    noStroke();
    fill(168, 169, 173);
    beginShape();
    vertex(650, 500);
    vertex(300, 500);
    vertex(300, 400);
    vertex(650, 400);
    endShape(CLOSE);
    triangle(300, 400, 300, 500, 200, 500);

    push();
    fill('#FF9E2B');
    beginShape();
    vertex(700, 375);
    vertex(800, 350);
    vertex(750, 400);
    vertex(820, 400);
    vertex(730, 450);
    vertex(790, 460);
    vertex(760, 480);
    vertex(830, 490);
    vertex(720, 500);
    vertex(800, 520);
    vertex(700, 525);
    endShape(CLOSE);
    pop();

    arc(700, 450, 200, 150, HALF_PI, -HALF_PI);
    triangle(325, 450, 525, 450, 525, 600);
    push();
    fill(0, 0, 255);
    ellipse(400, 450, 40, 50);
    ellipse(500, 450, 40, 50);
    beginShape();
    vertex(280, 420);
    vertex(325, 420);
    vertex(325, 470);
    vertex(230, 470);
    endShape(CLOSE);
    pop();

    push();
    colorMode(HSB, 360, 100, 100, 100);
    fill(96, 0, 100);
    bezier(620, 400, 725, 300, 730, 250, 800, 200);
    pop();


    push();
    fill(173, 216, 230);
    ellipse(825, 175, 50, 50);
    pop();

    push();
    fill(255, 255, 255);
    beginShape();
    vertex(800, 200);
    vertex(850, 150);
    vertex(900, 250);
    vertex(875, 220);
    vertex(850, 230);
    vertex(850, 250);
    endShape(CLOSE);
    pop();




}