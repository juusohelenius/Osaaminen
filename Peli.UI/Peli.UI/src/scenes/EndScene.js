import Phaser from "phaser";


export const EndScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize() {
    Phaser.Scene.call(this, { key: "EndScene" });
  },

  preload() {
    this.load.image("sky", "assets/images/sky2.jpg");
  },

  create() {
    console.log("TitleScene");
    this.sky = this.add.image(0, 0, "sky").setOrigin(0);
    this.title = this.add.text(100, 200, "Thanks for helping Theo \n to find his friend", {
      fontFamily: "verdana",
      fontSize: 40,
      color: "black"
    });
    this.anykey = this.add.text(100, 300, "Press any key to go to restart", {
      fontFamily: "verdana",
      fontSize: 40,
      color: "black"
    });

    this.input.once("pointerdown", () => {
      this.scene.transition({
        target: "TitleScene",
        duration: 300,
        moveBelow: true,
        onUpdate: this.transitionOut,
        data: { x: 400, y: 300 }
      });
    });
  },
  transitionOut(progress) {
    this.title.destroy();
    this.anykey.destroy();
    this.sky.y = 600 * progress;
  }
});
