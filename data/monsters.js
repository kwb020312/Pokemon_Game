const embyImage = new Image();
embyImage.src = "./img/embySprite.png";

const draggleImage = new Image();
draggleImage.src = "./img/draggleSprite.png";

const monsters = {
  Emby: {
    position: {
      x: 280,
      y: 325,
    },
    image: embyImage,
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    name: "불꽃이",
    attacks: [attacks["몸통 박치기"], attacks["파이어 볼"]],
  },
  Draggle: {
    position: {
      x: 800,
      y: 100,
    },
    image: draggleImage,
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    isEnemy: true,
    name: "꼬물이",
    attacks: [attacks["몸통 박치기"], attacks["파이어 볼"]],
  },
};
