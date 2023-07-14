import {Container, DisplayObject, Sprite, Text} from "pixi.js";


export let BaseBo = {
    memoryDestroy,
}

function memoryDestroy(item: DisplayObject, isAllClean: boolean = false) {
    if (item instanceof Text) {
        item.destroy({
            children: true,
            texture: true,
            baseTexture: true
        })
    } else if (item instanceof Sprite) {
        item.destroy({
            children: true,
            texture: false,
            baseTexture: false
        })
    } else if (item instanceof Container) {
        item.destroy({
            children: true,
            texture: isAllClean,
            baseTexture: isAllClean
        })
    } else {
        item.destroy();
    }
}