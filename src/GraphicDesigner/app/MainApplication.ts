import {DesignerPage} from "../base/DesignerPage";
import * as PIXI from "pixi.js";
import {Graphics} from "pixi.js";

/**
 * 入口类；开放接口
 */
export class MainApplication {

    public page: DesignerPage;

    public createDesigner(height?: number, width?: number, mountElementId?: string) {
        if (window?.console) {
            window.console.log("-----Designer Canvas-----");
        }
        console.log("create item")
        let mountId = mountElementId ? mountElementId : "CustomCanvas";
        let parentElement = document.getElementById(mountId);
        this.page = new DesignerPage(parentElement, width, height, false, undefined);
    }

    public drawSomething(){
        let brush = this.page.design.getPainter(false);
        brush.paintSomething();
    }
}
