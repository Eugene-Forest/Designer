import {CustomPage} from "../base/CustomPage";
import * as PIXI from "pixi.js";
import {Graphics} from "pixi.js";

/**
 * 入口类；开放接口
 */
export class MainApplication {

    public page: CustomPage;

    public createDesigner(height?: number, width?: number, mountElementId?: string) {
        if (window?.console) {
            window.console.log("-----Designer Canvas-----");
        }
        console.log("create item")
        let mountId = mountElementId ? mountElementId : "CustomCanvas";
        let parentElement = document.getElementById(mountId);
        this.page = new CustomPage(parentElement, width, height, false);
    }

    public drawSomething(){
        let brush = this.page.design.getPainter(false);
        brush.paintSomething();
    }
}
