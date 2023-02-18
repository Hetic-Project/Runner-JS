let score = 0;
let distanceTravelled = 0;

// ...

function scoreUpdate(distance) {
  distanceTravelled += distance;
  score = Math.floor(distanceTravelled / 200) * 10;
  console.log(score);
}

function moveContent(distance) {
  scoreUpdate(distance);
  move(content, distance, animationWidth);
}

export {scoreUpdate}
