import expressModule = require("express");
import { Controller } from "../../core/controllers/Controller";
import { NodeWebServerApplication } from "../applications/NodeWebServerApplication";
import { NodeWebServerView } from "../views/NodeWebServerView";

export abstract class NodeWebServerController extends Controller {
    protected mRouter: expressModule.Router;

    public constructor(pApplication: NodeWebServerApplication) {
        super(pApplication);
        this.mRouter = expressModule.Router();
        pApplication.useRouter(this.defineRouterRoot(), this.mRouter);
    }

    public getRouter(): expressModule.Router {
        return this.mRouter;
    }

    protected get(pRoute: string, pFunction: (pRequest: expressModule.Request, pCallback: (pView: NodeWebServerView) => void) => void): NodeWebServerController {
        var controller: NodeWebServerController = this;
        this.mRouter.get(pRoute, (pRequest: expressModule.Request, pResponse: expressModule.Response, pNextFunction: expressModule.NextFunction) => {
            controller.processRequest(pFunction, pRequest, pResponse, pNextFunction);
        });
        return this;
    }

    protected post(pRoute: string, pFunction: (pRequest: expressModule.Request, pCallback: (pView: NodeWebServerView) => void) => void): NodeWebServerController  {
        var controller: NodeWebServerController = this;
        this.mRouter.post(pRoute, (pRequest: expressModule.Request, pResponse: expressModule.Response, pNextFunction: expressModule.NextFunction) => {
            controller.processRequest(pFunction, pRequest, pResponse, pNextFunction);
        });
        return this;
    }

    protected put(pRoute: string, pFunction: (pRequest: expressModule.Request, pCallback: (pView: NodeWebServerView) => void) => void): NodeWebServerController {
        var controller: NodeWebServerController = this;
        this.mRouter.put(pRoute, (pRequest: expressModule.Request, pResponse: expressModule.Response, pNextFunction: expressModule.NextFunction) => {
            controller.processRequest(pFunction, pRequest, pResponse, pNextFunction);
        });
        return this;
    }

    protected delete(pRoute: string, pFunction: (pRequest: expressModule.Request, pCallback: (pView: NodeWebServerView) => void) => void): NodeWebServerController {
        var controller: NodeWebServerController = this;
        this.mRouter.delete(pRoute, (pRequest: expressModule.Request, pResponse: expressModule.Response, pNextFunction: expressModule.NextFunction) => {
            controller.processRequest(pFunction, pRequest, pResponse, pNextFunction);
        });
        return this;
    }

    protected processRequest(pFunction: (pRequest: expressModule.Request, pCallback: (pView: NodeWebServerView) => void) => void, pRequest: expressModule.Request, pResponse: expressModule.Response, pNextFunction: expressModule.NextFunction): void {
        pFunction.call(this, pRequest, (pView: NodeWebServerView) => {
            if(pView != null) {
                pView.setResponse(pResponse).setNextFunction(pNextFunction).process();
            }
        });
    }

    public abstract defineRouterRoot(): string;
    public abstract registerRoutes(): void;
}