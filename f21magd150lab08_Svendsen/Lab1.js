var font1,font2;
var img1, img2;
var x;

//this preloads the images, texts, and fonts the fastest
function preload(){
    font1 = loadFont("SANS.TTF");
    font2 = loadFont("GROOVED.TTF");
    img1 = loadImage("rick.png");
    img2 = loadImage("boom.png");
    text1 = loadStrings("text1.txt");

}

function setup() {
    createCanvas(800,600);
    x=0;
    pdf = createPDF();
    pdf.beginRecord();

}

function draw() {

        background(0);
    img1.mask(img2);
image(img1, 0,0);
push();
img2.resize(200,200);
//this tints all of the explosion pictures to make them red and slightly transparent
tint(255,0,0,126);
image(img2, 200,10);
push();

image(img2, 500,10);
image(img2, 575,200);
pop();
image(img2, 100,200);

pop();
push();
stroke(173,216,230);
strokeWeight(25);
line(440,110,500,0);
line(490,110,550,0);
pop();
//this little block makes it so the text will scroll atop the top of the screen
fill(255);
textFont(font1);
x = x+5;
if(x > width)
{
x = 0 - 159;
}
push();
textSize(20);
text("He will never give you up", x,20);
pop();
push();
textSize(30);
textAlign(CENTER,BOTTOM);
text(text1, width/2,500);
pop();
push();
fill(255);
textFont(font2);
textAlign(LEFT,TOP);
textSize(50);
text("The Return of the Rick", 100,400);
pop();
print(img1.width);
}

//this function makes it so that when the user presses the mosue it saves the image as a PDF
//I'm not exactly sure where it saves to though
function mousePressed(){
pdf.save();

}
