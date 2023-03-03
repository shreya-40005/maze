scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 f 3 3 3 3 f 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 f 3 3 3 3 3 3 3 3 f 3 . . 
    . . 3 3 f 3 3 3 3 3 3 f 3 3 . . 
    . . 3 3 3 f 3 3 3 3 f 3 3 3 . . 
    . . 3 3 3 3 f f f f 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
