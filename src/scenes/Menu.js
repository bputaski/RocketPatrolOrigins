class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }
    create(){
       let menuText = this.add.text(300, 240, "menu here");
       menuText.setOrigin(0.5,0.5);

       this.scene.start("play");
    }
}