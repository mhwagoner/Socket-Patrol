//Plug prefab
class Plug extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)

        //add object to existing scene
        scene.add.existing(this)
        this.points = pointValue
        this.moveSpeed = game.settings.PlugSpeed
    }

    update() {
        //left movement
        this.x -= this.moveSpeed

        //wrap from left to right
        if(this.x <= 0 - this.width) {
            this.reset()
        }
    }

    reset(){
        this.x = game.config.width
    }
}