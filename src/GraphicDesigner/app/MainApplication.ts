import {CustomPage} from "../base/CustomPage";
import {ListeningType} from "../DrawingEngine/Helper/GraphInterfacType";

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

    public changeEventListener(type:ListeningType){
        switch (type){
            case ListeningType.BaseCanvas:{
                if(this.page.design.listeningType!=ListeningType.BaseCanvas){
                    this.page.design.destroyContainerListener();
                    this.page.design.initBaseCanvasListener();
                }
                break;
            }
            case ListeningType.Container:{
                if(this.page.design.listeningType!=ListeningType.Container){
                    this.page.design.destroyBaseCanvasListener();
                    this.page.design.initContainerListener();
                }
                break;
            }
            default :{

            }
        }
    }


    private getDesign(){
        return this.page.design;
    }
}
