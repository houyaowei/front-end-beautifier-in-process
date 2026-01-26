class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(15, 16);

console.log("The square of rectangle is:", square.area); // 240
