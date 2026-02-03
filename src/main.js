/*
name: Michael Wagoner
mod: Socket Patrol
time spent: 7 hours
mods made:
    -Randomize each spaceship's movement direction at the start of each play (1)
    -Create a new scrolling tile sprite for the background (1)
    -Allow the player to control the Rocket after it's fired (1)
    -Display the time remaining (in seconds) on the screen (3)
    -Add a new spaceship type (tweezers) that is smaller, faster, and worth more points (5)
    -Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
    -Implement mouse control for player movement and left mouse click to fire (5)
citations:
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3