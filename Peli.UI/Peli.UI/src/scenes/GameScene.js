import Phaser from "phaser";
let platforms, door, player, cursors, speed, musiikki;
let isonDoor = false;



export const GameScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize() {
    Phaser.Scene.call(this, { key: "GameScene" });
  },

  create() {
    // this.cameras.main.setBounds(0, 0, 800 * 4, 600);
    //startSound = this.sound.add("musiikk.wav");
    //startSound.play();

    // renderöidään ruudulle jo valmiiksi ladattu tausta
    this.add.image(400, 300, "sky");
    musiikki = this.sound.add("musiikki");
    musiikki.loop = true;
    musiikki.play();

    // luodaan tasoja varten oma staattinen ryhmä
    platforms = this.physics.add.staticGroup();
    

    // renderöidään ruudulle platformit joille hyppiä
    platforms
      .create(400, 568, "cloud")
      .setScale(2)
      .refreshBody();

    platforms.create(600, 400, "cloud");
    platforms.create(50, 250, "cloud");
    platforms.create(750, 220, "cloud");


    //ovi renderöidään
    door = this.physics.add.staticGroup();
    door.create(700, 170, "door");
    

    // pelihahmo
    player = this.physics.add.sprite(100, 450, "character");
    player.setScale(0.5);
    
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, door, openDoor, null, this);
    
    
    // pelihahmo on ovella
    function openDoor (player, door) { //eslint-disable-line
      isonDoor = true;
    }
    // pelihahmon ja platformien on hyvä hylkiä toisiaan
    this.physics.add.collider(player, platforms);
   
  
    speed = Phaser.Math.GetSpeed(200, 1);

    
    // aktivoidaan näppäimet ja annetaan niille tehtävä
    cursors = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key: "left", // näppäin
      frames: this.anims.generateFrameNumbers("character", { start: 1, end: 9 }), // framet mitä spritestä käytetään
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "character", frame: 0 }],
      frameRate: 20
    });
  },

  // päivitetään ruutua ja määritellään kuinka nopeasti liike tapahtuu
  update(time, delta) {
    if (cursors.left.isDown) {
      player.x -= speed * delta;
      player.anims.play("left", true);
      player.flipX = true;
    } else if (cursors.right.isDown) {
      player.x += speed * delta;
      player.anims.play("left", true);
      player.flipX = false;
    } else {
      player.setVelocityX(0);

      player.anims.play("turn");
    }
  
    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-400);
    }

    //määritetään tapahtuma kun pelaaja osuu oveen
    // pelihahmo ja ovi
   


    if (isonDoor) {
      this.scene.stop();
      musiikki.stop();
      this.scene.start('GameScene_2')
      isonDoor = false; 
  }
    },
  }
  
);

