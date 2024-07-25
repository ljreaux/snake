let cnv: p5.Renderer;
let canvasX: number;
let canvasY: number;
let snake: segment[] = [];
let food: segment;
let grid: number;

function setup() {
  console.log("🚀 - Setup initialized - P5 is running");
  const canvasWidth = Math.max(windowWidth / 2, 400);
  cnv = createCanvas(canvasWidth, canvasWidth);
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  cnv.position(canvasX, canvasY);
  background(255, 0, 200);
  grid = width / 20;

  food = new segment(
    floor(random(0, height / grid)) * grid,
    floor(random(0, width / grid)) * grid,
    grid,
    [255, 0, 0]
  );
  snake.push(
    new segment(
      floor(random(0, height / grid)) * grid,
      floor(random(0, width / grid)) * grid,
      grid
    )
  );
}

// p5 WILL AUTO RUN THIS FUNCTION IF THE BROWSER WINDOW SIZE CHANGES
function windowResized() {
  const canvasWidth = Math.max(windowWidth / 2, 400);
  resizeCanvas(canvasWidth, canvasWidth);
  canvasX = (windowWidth - width) / 2;
  canvasY = (windowHeight - height) / 2;
  cnv.position(canvasX, canvasY);
  grid = width / 20;
}

// p5 WILL HANDLE REQUESTING ANIMATION FRAMES FROM THE BROWSER AND WIL RUN DRAW() EACH ANIMATION FROME
function draw() {
  // CLEAR BACKGROUND
  background(0);
  food.show();
  snake.forEach((segment) => segment.show());
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      snake[0].move("left");
      break;
    case RIGHT_ARROW:
      snake[0].move("right");
      break;
    case UP_ARROW:
      snake[0].move("up");
      break;
    case DOWN_ARROW:
      snake[0].move("down");
      break;
  }
}
