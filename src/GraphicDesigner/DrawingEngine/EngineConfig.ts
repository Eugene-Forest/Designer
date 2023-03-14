import * as PIXI from "pixi.js"
import * as PIXI_Legacy from "pixi.js-legacy";


window["PIXI"] = PIXI.utils.isWebGLSupported() ? PIXI: PIXI_Legacy;