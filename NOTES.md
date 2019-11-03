### Scaling

Scaling so that everything looks correct on every screen.

Resolutions differ depending on the DPI, this can be retrieved from the window object like so:

```
window.devicePixelRatio
```

The values returned are usually 1, 2, 3. 3 being high density display like a retina display.

Graphics should be created 3 times larger than they need to be and scaled down based on the value returned from the device pixel ration.

The window size can also be returned from the window object like so:

```
window.innerWidth
window.innerHeight
```

```
game = new Phaser.Game(window.innerWidth * 
window.devicePixelRatio, window.innerHeight * 
window.devicePixelRatio, Phaser.AUTO, 'gameArea');
```

Assets can also be scaled like so:

```
scaleRatio = window.devicePixelRatio / 3;
```

```
myAsset.scale.setTo(scaleRatio, scaleRatio);
```