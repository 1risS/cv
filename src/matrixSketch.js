export default function sketch(p) {
  // OK, so basically the challenge right now is to make one array with capital letters, for display, and one with lowercase letters, that the code reads and deletes when you type them. Currently, there's one line of code below that makes all of the letters disappear, but only if you have caps lock turned on.

  // one array uppercase, one lowercase
  // Array Lists
  // LoopBackwards
  let words = [];
  setInterval(makeWord, 100);
  let letters = ["I", "R", "I", "S"]; //this is the letters array; currently all in capitals. if we make them lowercase, the one line of code below will make them disappear without caps lock

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont("monospace", 24);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function draw() {
    p.background(80, 10, 65);
    for (var i = words.length - 1; i >= 0; i--) {
      words[i].display();
      words[i].move();

      if (words[i].isOffScreen()) {
        words.splice(i, 1);
      }
    }
  };

  p.windowResized = function windowResized() {
    p.resizeCanvas(
      p.windowWidth / window.devicePixelRatio,
      p.windowHeight / window.devicePixelRatio
    );
  };

  function makeWord() {
    words.push(new Word());
  }

  class Word {
    constructor() {
      this.x = p.random(p.width);
      this.y = p.windowHeight / 2;
      this.speed = 1;
      this.l = p.random(letters);
      this.alpha = p.random(128);
    }

    move() {
      this.y += this.speed;
    }

    display() {
      p.fill(0, 255, 255, this.alpha);
      //ellipse(this.x, this.y, 4, 4);
      p.text(this.l, this.x, this.y);
    }

    isOffScreen() {
      if (this.y > p.height) {
        return true;
      }
    }
  }
}
