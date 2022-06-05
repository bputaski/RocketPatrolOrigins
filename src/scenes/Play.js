class Play extends Phaser.Scene{
    constructor(){
        super("play");
    }

    preload(){
        this.load.image('starfield','assets/starfield.png')
        this.load.image('rocket','assets/rocket.png');
        this.load.image('ship', 'assets/ship.png');
    }

    create(){

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.starfield = this.add.tileSprite(
            0,0, 640,480, 'starfield').setOrigin(0,0);

        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);

        this.add.rectangle(0,0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0,game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
   
        this.p1Rocket = new Rocket(this, 0, 0, 'rocket').setOrigin(0.5, 0);
        this.p1Rocket.reset();
        
        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'ship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'ship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'ship', 0, 10).setOrigin(0,0);


        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        this.p1Rocket.update();
        
        // update spaceships
        this.ship01.update();               
        this.ship02.update();
        this.ship03.update();

        this.starfield.tilePositionX -=4;       
        
        const movementSpeed = 3;
        if (keyLEFT.isDown){
            this.p1Rocket.x -= movementSpeed;
        }

        if (keyLEFT.isDown){
            this.p1Rocket.x += movementSpeed;
        }
    }
}

