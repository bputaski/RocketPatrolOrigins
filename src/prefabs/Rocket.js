class Rocket extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.firing = false;
    }

    update(){
        //left + right movement
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }
        //fire button
        if (Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true
        }
        //if fired, go up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    reset(){
        this.x = game.config.width/2;
        this.y = 431;
    }
}