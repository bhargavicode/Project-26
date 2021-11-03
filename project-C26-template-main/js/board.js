class Board{
//hint1

constructor(x, y, width, height) {
  var options = {
      isStatic: true
  };

  this.body = Bodies.rectangle(x, y, width, height, options);

  this.width = width;
  this.height = height;
  this.image = loadImage("./assets/board.png");

  World.add(world, this.body);
}
//hint2
display() {
var pos = this.body.position;
push()
imageMode(CENTER);
image(this.image, pos.x, pos.y, this.width, this.height);
pop();
}
}





















