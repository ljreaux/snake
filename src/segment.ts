class segment {
  x: number;
  y: number;
  width: number;
  color: number[];

  constructor(x: number, y: number, width: number, color?: number[]) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.color = color || [255];
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.width);
  }
  move(dir: "left" | "right" | "up" | "down") {
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
        console.error(`Invalid direction: ${dir}`);
        break;
    }
  }
}
