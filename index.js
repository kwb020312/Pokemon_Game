const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./img/Pellet Town.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";

class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, -745, -600);
  }
}

const background = new Sprite({
  position: {
    x: -745,
    y: -600,
  },
  image: image,
});

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );
}

animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      console.log("press w key");
      break;
    case "a":
      console.log("press a key");
      break;
    case "s":
      console.log("press s key");
      break;
    case "d":
      console.log("press d key");
      break;
  }
});
