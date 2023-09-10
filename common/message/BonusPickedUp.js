import nengi from "nengi";

class BonusPickedUp {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

BonusPickedUp.protocol = {
  x: nengi.Float32,
  y: nengi.Float32,
};

export default BonusPickedUp;
