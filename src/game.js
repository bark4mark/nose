const scaleRatio = window.devicePixelRatio / 3;
let nose, finger, touchPointer, pointer, canPress, speed;

const center = (game) => {
    return {
        x: game.config.width / 2,
        y: game.config.height / 2
    }
}

const preload = function () {
    this.load.image('nose', 'assets/nose.png');
    this.load.image('finger', 'assets/finger.png');
}

const win = function () {
    nose.setVelocity(0,0);
    speed += 200;
    this.scene.restart('default');
}

const create = function () {
    canPress = true;
    speed = 400;
    touchPointer = this.input.pointer1;
    pointer = this.input.activePointer;
    const centerPoint = center(game);
    nose = this.physics.add.image(centerPoint.x, centerPoint.y, 'nose');
    nose.setScale(scaleRatio, scaleRatio);

    finger = this.physics.add.image(centerPoint.x, centerPoint.y + speed, 'finger');
    finger.setScale(scaleRatio, scaleRatio);

    finger.setOrigin(0.5,0);
    finger.setVelocity(1000,0);
    finger.setBounce(1,1);
    finger.setCollideWorldBounds(true);
    this.physics.world.checkCollision.up = false;

    this.physics.add.collider(finger, nose, win, null, this);
}

const update = function () {
    if(pointer.isDown && canPress || touchPointer.isDown && canPress) {
        finger.setVelocity(0,-1000);
        canPress=false;
    }

    if(finger.y < 0) {
        speed = 400;
        this.scene.restart('default');
    }
}

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    transparent: true,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

const game = new Phaser.Game(config);
