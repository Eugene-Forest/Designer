import {DesignerPage} from "../base/DesignerPage";

/**
 * 入口类；开放接口
 */
export class MainApplication {

    public designer: DesignerPage;

    public createDesigner(height?: number, width?: number, mountElementId?: string) {
        if (window?.console) {
            window.console.log("-----Designer Canvas-----");
        }
        console.log("create item")
        let mountId = mountElementId ? mountElementId : "CustomCanvas";
        let parentElement = document.getElementById(mountId);
        this.designer = new DesignerPage(parentElement, width, height, false, undefined);
    }
}
