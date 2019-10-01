function preload() {

}
var charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', ')', '!', '#', '$', '%', '^', '&', '*', '(', '/', '[', '<', '?', '}']
var colorList1 = ['green', 'white', 'darkgreen'];
var colorList2 = ['red', 'white'];
var colorList3 = ['violet', 'blue'];
var colorList4 = ['blue', 'yellow'];
var colorList5 = ['0, 247, 255, 255', (245, 233, 66, 200)];
var colorList6 = ['orange', (245, 233, 66, 140)];
var index2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  frameRate(30);
  s = 30;
  c = 0;
  w = 0;
  y = 0;
  z = 0;
  i = 0;
}

function draw() {
  background("black");

  var cof = 0.05;
  var r = 200;
  var az = false;

  w += 20; // blue
  if (frameCount > s * 0.87 && frameCount < s * 1.55) { // dinamic red background
    z += 20;
  } else if (frameCount > s * 1.55) { // dinamic violet background
    y += 20;
  }

  for (var a = 0; a < windowWidth; a += 20) {
    for (var b = 0; b < windowHeight; b += 20) {
      if ((a * cof > frameCount && a * cof < frameCount + 2) // violet lines
        ||
        (b * cof > frameCount && b * cof < frameCount + 2) ||
        (a < windowWidth - frameCount / cof && a > windowWidth - frameCount / cof - 21)
        //|| (b < windowWidth - frameCount / cof && b > windowWidth - frameCount / cof - 19.7)
        ||
        (b < windowHeight - frameCount / cof && b > windowHeight - frameCount / cof - 21)) {
        fill(140, 0, 255);
      } else if ((a > w && a < windowWidth - w && b > w && b < windowHeight - w)) { // azzurro
        fill(0, 247, 255, 140);
      } else if (frameCount > s * 0.87 && frameCount < s * 1.55 && (a > z + width / 3.6 && a < windowWidth - z && a < windowWidth - width / 3.6 && a < windowWidth - width / 3.6 - z && b > height / 2 - z * 1.1 && b < height / 2 + z * 1.11)) { // red
        fill(235, 52, 52, 140);
      } else if (frameCount > s * 1.55 && ((a > width / 2 && a < y + width / 2) || (a < width / 2 && a > width / 2 - y) || a == width / 2)) { // dinamic violet background
        fill(140, 0, 255, 160);
      } else {
        fill(0, 102, 153, 160); // base color
      }

      var index = random(charList);

      var colorHex1 = random(colorList1);
      var colorHex2 = random(colorList2);
      var colorHex3 = random(colorList3);
      var colorHex4 = random(colorList4);
      var colorHex5 = random(colorList5);
      var colorHex6 = random(colorList6);

      var colorListGroup = [colorHex1, colorHex2, colorHex3, colorHex4, colorHex5, colorHex6];

      if (frameCount > s * 3.3) {

        if (mouseX > 5 * width / 6) {
          fill(color(colorListGroup[0]));
        } else if (mouseX > 4 * width / 6 && mouseX < 5 * width / 6) {
          fill(color(colorListGroup[1]));
        } else if (mouseX > 3 * width / 6 && mouseX < 4 * width / 6) {
          fill(color(colorListGroup[2]));
        } else if (mouseX > 2 * width / 6 && mouseX < 3 * width / 6) {
          fill(color(colorListGroup[3]));
        } else if (mouseX > width / 6 && 2 * width / 6) {
          fill(color(colorListGroup[4]));
        } else if (mouseX < width / 6) {
          fill(color(colorListGroup[5]));
        }
      }
      textFont('matrix code nfi');
      textSize(20);
      text(index, a, b);
      push();
      if (frameCount > s * 3.3) {
        textFont('Verdana');
        textSize(50);
        textAlign(CENTER);
        fill(0, 0, 0, 255);
        rect(width / 2.66, height / 2.25, width / 4, height / 11.1);
        noStroke();
        fill("white");
        text("move the mouse", width / 2, height / 2);
      }
      pop();
    }
  }
}
