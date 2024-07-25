var segment = (function () {
    function segment(x, y, width, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color || [255];
    }
    segment.prototype.show = function () {
        fill(this.color);
        rect(this.x, this.y, this.width);
    };
    segment.prototype.move = function (dir) {
        switch (dir) {
            case "left":
                this.x -= this.width;
                break;
            case "right":
                this.x += this.width;
                break;
            case "up":
                this.y -= this.width;
                break;
            case "down":
                this.y += this.width;
                break;
            default:
                console.error("Invalid direction: ".concat(dir));
                break;
        }
    };
    return segment;
}());
var cnv;
var canvasX;
var canvasY;
var snake = [];
var food;
var grid;
function setup() {
    console.log("🚀 - Setup initialized - P5 is running");
    var canvasWidth = Math.max(windowWidth / 2, 400);
    cnv = createCanvas(canvasWidth, canvasWidth);
    canvasX = (windowWidth - width) / 2;
    canvasY = (windowHeight - height) / 2;
    cnv.position(canvasX, canvasY);
    background(255, 0, 200);
    grid = width / 20;
    food = new segment(floor(random(0, height / grid)) * grid, floor(random(0, width / grid)) * grid, grid, [255, 0, 0]);
    snake.push(new segment(floor(random(0, height / grid)) * grid, floor(random(0, width / grid)) * grid, grid));
}
function windowResized() {
    var canvasWidth = Math.max(windowWidth / 2, 400);
    resizeCanvas(canvasWidth, canvasWidth);
    canvasX = (windowWidth - width) / 2;
    canvasY = (windowHeight - height) / 2;
    cnv.position(canvasX, canvasY);
    grid = width / 20;
}
function draw() {
    background(0);
    food.show();
    snake.forEach(function (segment) { return segment.show(); });
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
//# sourceMappingURL=build.js.map