import { View } from "../../core/views/View";
import { NodeWebServerApplication } from "../applications/NodeWebServerApplication";
import { Response } from "express";
import { NextFunction } from "express-serve-static-core";

export abstract class NodeWebServerView extends View {
    protected mResponse: Response;
    protected mNextFunction: NextFunction;

    public constructor(pApplication: NodeWebServerApplication) {
        super(pApplication);
    }

    public getResponse(): Response {
        return this.mResponse;
    }

    public setResponse(pResponse: Response): NodeWebServerView {
        this.mResponse = pResponse;
        return this;
    }

    public getNextFunction(): NextFunction {
        return this.mNextFunction;
    }

    public setNextFunction(pNextFunction: NextFunction): NodeWebServerView {
        this.mNextFunction = pNextFunction;
        return this;
    }

    protected send(pValue: string): void {
        this.mResponse.send(pValue);
    }

    protected sendJson(pData: any): void {
        this.mResponse.json(pData); 
    }

    protected sendError(pError: any, pStatusCode: number): void {
        this.mResponse.status(pStatusCode).json(pError);
    }

    protected render(pTemplate: string, pOptions?: Object, pCallback?: (pError: Error, pHtml: string) => void): void {
        this.mResponse.render(pTemplate, pOptions, pCallback);
    }
}