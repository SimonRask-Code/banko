class Circle {
  constructor(x, y, size, value) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.value = value;
    this.on = false;
  }

  display() {
    // Draw ellipse

    fill(255);
    noStroke();
    ellipse(this.x, this.y - 6, this.size * 2);
    if (this.on) {
      // If tuned on
      fill(0, 80, 80)
      strokeWeight(4);
      stroke(190, 110, 0)
    } else {
      fill(0, 90, 90);
      strokeWeight(4);
      stroke(255, 160, 50);
    }

    ellipse(this.x, this.y, this.size * 2);

    // Draw value
    noStroke();
    textSize(this.size * 0.8);

    if (this.value != 0) {
      if (this.on) {
        fill(190, 110, 0)
        textAlign(CENTER, CENTER);
        text(this.value, this.x, this.y);
      } else {
        fill(255, 160, 50)
        textAlign(CENTER, CENTER);
        text(this.value, this.x, this.y);
      }
    }
  }

  clicked(x, y) {
    if (dist(x, y, this.x, this.y) < this.size && this.value != 0) {
      this.on = !this.on;
      return true
    } else {
      return false
    }
  }

}

class button {
  constructor(x, y, size, value) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.value = value;
    this.on = false;
    this.on_for = 0;
  }

  display() {
    // Draw ellipse

    fill(255);
    noStroke();
    rect(this.x, this.y - 6, this.size, this.size / 3, this.size / 6);
    if (this.on) {
      // If tuned on
      fill(0, 80, 80)
      strokeWeight(4);
      stroke(190, 110, 0)
    } else {
      fill(0, 90, 90);
      strokeWeight(4);
      stroke(255, 160, 50);
    }

    rect(this.x, this.y, this.size, this.size / 3, this.size / 6);

    // Draw value
    noStroke();
    textSize(this.size * 0.15);

    if (this.on) {
      fill(190, 110, 0)
      textAlign(CENTER, CENTER);
      text(this.value, this.x + this.size / 2, this.y + this.size / 6);
      this.on_for++;

    } else {
      fill(255, 160, 50)
      textAlign(CENTER, CENTER);
      text(this.value, this.x + this.size / 2, this.y + this.size / 6);
    }

    if (this.on_for > 5) {
      this.on = false;
      this.on_for = 0;
    }
  }

  clicked(x, y) {
    if (dist(x, y, this.x, this.y) < this.size && this.value != 0) {
      this.on = !this.on;
      return true
    } else {
      return false
    }
  }
}