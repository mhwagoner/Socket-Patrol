//Tweezers prefab
class Tweezers extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)

        //add object to existing scene
        scene.add.existing(this)
        this.points = pointValue

        //random direction
        if (Phaser.Math.Between(-1, 1) >= 0) {
            this.moveSpeed = game.settings.tweezersSpeed
            this.flipX = false
        } else {
            this.moveSpeed = game.settings.tweezersSpeed * -1
            this.x = this.x - game.config.width - borderUISize*6
            this.flipX = true
        }
    }

    update() {
        //movement
        this.x -= this.moveSpeed

        //wrap around screen
        if(this.moveSpeed > 0 && this.x <= -10 - this.width){
            this.reset()
        } else if (this.moveSpeed < 0 && this.x >= game.config.width + 10){
            this.reset()
        }
    }

    reset(){
        if(this.moveSpeed > 0){
            this.x = game.config.width
        } else if (this.moveSpeed < 0){
            this.x = 0 - this.width
        }
        
    }
}