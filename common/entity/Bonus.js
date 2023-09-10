import nengi from "nengi";
import SAT from "sat";

class Bonus {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.collider = new SAT.Box(
      new SAT.Vector(this.x, this.y),
      this.width,
      this.height
    ).toPolygon();
  }
}

Bonus.protocol = {
  x: nengi.UInt16,
  y: nengi.UInt16,
  width: nengi.UInt16,
  height: nengi.UInt16,
};

export default Bonus;
