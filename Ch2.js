//Bad Example
function d(a, b) {
  return a * b;
}

let x = d(10, 5);
console.log(x);

//Good Example
function calculateArea(width, height) {
  return width * height;
}

let rectangleArea = calculateArea(10, 5);
console.log(rectangleArea);
