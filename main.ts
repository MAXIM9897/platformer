scene.setBackgroundColor(9)
let CAT = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f . f . . f . f . . . . 
    . . . . f . f . . f . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(CAT, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
CAT.ay = 350
scene.cameraFollowSprite(CAT)
tiles.placeOnRandomTile(CAT, assets.tile`start`)
let coin = sprites.create(assets.image`coin`, SpriteKind.Player)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 4 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 4 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . f 5 5 4 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 4 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 f . . . . . . 
        . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . f 5 5 4 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 f . . . . . 
        . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
