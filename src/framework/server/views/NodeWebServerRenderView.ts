import { NodeWebServerView } from "./NodeWebServerView";
import { NodeWebServerApplication } from "../applications/NodeWebServerApplication";

export class NodeWebServerRenderView extends NodeWebServerView {
    protected mTemplateName: string;
    protected mParameters: Object;

    public constructor(pApplication: NodeWebServerApplication, pTemplateName: string, pParameters?: Object) {
        super(pApplication);
        this.mTemplateName = pTemplateName;
        this.mParameters = pParameters;
    }

    public getTemplateName(): string {
        return this.mTemplateName;
    }

    public get Parameters(): Object {
        return this.mParameters;
    }

    public process(): void {
        this.render(this.mTemplateName, this.mParameters);
    }
}