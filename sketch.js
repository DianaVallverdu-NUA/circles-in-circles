const numberOfCircles = 10;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

xDir = [1, -1, 0, 0];
yDir = [0, 0, 1, -1];

function draw() {
  background(220);
  noStroke();

  for (let i = 0; i < numberOfCircles; i++) {
    for (let j = 0; j < numberOfCircles; j++) {
      const centreX = ((i + 0.5) * width) / numberOfCircles;
      const centreY = ((j + 0.5) * width) / numberOfCircles;
      const diameter = width / numberOfCircles;
      fill(255, 0, 0, 200);
      circle(centreX, centreY, diameter);

      for (let ii = 0; ii < 4; ii++) {
        fill(0, 255, 0, 200);
        const newCentreX = centreX + xDir[ii] * diameter * 0.5;
        const newCentreY = centreY + yDir[ii] * diameter * 0.5;
        const smallDiameter = diameter * 0.5;

        circle(newCentreX, newCentreY, smallDiameter);
      }
    }
  }
}
