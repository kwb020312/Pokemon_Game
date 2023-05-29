const monsters = {
  불꽃이: {
    position: {
      x: 280,
      y: 325,
    },
    image: {
      src: "./img/embySprite.png",
    },
    frames: {
      max: 4,
      hold: 30,
    },
    animate: true,
    name: "불꽃이",
    attacks: [attacks["몸통 박치기"], attacks["파이어 볼"]],
  },
  꼬물이: {
    position: {
      x: 800,
      y: 100,
    },
    image: {
      src: "./img/draggleSprite.png",
    },
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
