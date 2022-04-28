class Rocket extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.firing = false;
    }

    update(){
        const movementSpeed = 3;
        if (keyLEFT.isDown){
            this.p1Rocket.x -= movementSpeed;
        }

        if (keyLEFT.isDown){
            this.p1Rocket.x += movementSpeed;
        }



        if(this.firing){
            this.y-=10;
            
            if(this.y < 0){

            }
        }
    }

    reset(){
        this.x = game.config.width/2;
        this.y = 431;
    }
}