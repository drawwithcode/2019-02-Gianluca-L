function preload() {

}
var charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', ')', '!', '#', '$', '%', '^', '&', '*', '(', '/', '[', '<', '?', '}']
//var colorList = ['green', 'yellow', 'orange', 'red', 'blue', 'violet'];
var colorList = ['green', 'white', 'darkgreen'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  frameRate(30);
  s = 30;
  c = 0;
  w = 0;
  y = 0;
}

function draw() {

  background("black");

  console.log(frameCount);

  //GIUSTO
  var cof = 0.05;
  var r = 200;

  w += 20; // blue
  if (frameCount > s * 1.55) { // dinamic violet background
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
      } else if (frameCount > s * 1.55 && ((a > width / 2 && a < y + width / 2) || (a < width / 2 && a > width / 2 - y) || a == width / 2)) { // dinamic violet background
        fill(140, 0, 255, 160);
      } else {
        fill(0, 102, 153, 160); // base color
      }
      var index = random(charList);

      textFont('matrix code nfi');
      textSize(20);
      //textAlign(CENTER);
      text(index, a, b);


    }
  }


}
