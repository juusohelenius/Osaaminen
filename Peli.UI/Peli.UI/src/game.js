import Phaser from "phaser";

import { EndScene } from "./scenes/EndScene";
import { GameScene_3 } from "./scenes/GameScene_3";
import { GameScene_2 } from "./scenes/GameScene_2";
import { GameScene } from "./scenes/GameScene";
import { BootScene } from "./scenes/BootScene";
import { TitleScene } from "./scenes/TitleScene";
import { InfoScene } from "./scenes/InfoScene";

class GameIndex extends Phaser.Game {
  constructor() {
    const gameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      title: "Test game",
      scene: [BootScene, TitleScene, InfoScene, GameScene, GameScene_2, GameScene_3, EndScene],
    };
    super(gameConfig);
  }
}

new GameIndex(); //eslint-disable-line

