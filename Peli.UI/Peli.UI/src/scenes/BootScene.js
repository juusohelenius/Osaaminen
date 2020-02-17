import Phaser from "phaser";

// let progressBar, progressBox, percentText, loadingText, width, height;

export const BootScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize() {
    Phaser.Scene.call(this, { key: "BootScene" });
  },

  preload() {
    this.load.image("mountain", "assets/images/mountain.jpg");
    this.load.image("ground", "assets/images/maa.png");
    this.load.image("door", "assets/images/door.png");
    this.load.audio("musiikki", "assets/audio/musiikki.wav");
    this.load.image("sky", "assets/images/sky2.jpg");
    this.load.image("desert", "assets/images/desert.jpg");
    this.load.image("cloud", "assets/images/cloud.png");
    this.load.image("ice", "assets/images/ice.png");
    this.load.image("friend", "assets/images/friend.png");
    this.load.spritesheet("character", "assets/images/pelinappula.png", {
      frameWidth: 85.5,
      frameHeight: 85,
    });
    this.load.spritesheet("enemy", "assets/images/enemy.png", {
      frameWidth: 85.5,
      frameHeight: 85
    });
  },
  create() {
    console.log("BootScene");
    this.scene.start("TitleScene");
  }
});

