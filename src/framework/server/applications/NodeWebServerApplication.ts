import { Application } from "../../core/applications/Application";
import { NodeWebServerController } from "../controllers/NodeWebServerController";
import { NodeWebServerModel } from "../models/NodeWebServerModel";
import { Server } from "http";
import { Express, Router } from "express";
import { Sequelize, SyncOptions } from "sequelize";

export abstract class NodeWebServerApplication extends Application<NodeWebServerController, NodeWebServerModel<any, any, any>> {
    protected mSequelize: Sequelize;
    protected mExpress: Express;
    protected mHttpServer: Server;

    public constructor(pName: string, pSequelize: Sequelize, pExpress: Express) {
        super(pName);
        this.mSequelize = pSequelize;
        this.mExpress = pExpress;
    }

    public getSequelize(): Sequelize {
        return this.mSequelize;
    }

    public getExpress(): Express {
        return this.mExpress;
    }

    public getHttpServer(): Server {
        return this.mHttpServer;
    }

    public start(): void {
        super.start();
        this.mHttpServer = this.mExpress.listen(this.getListenPort());
    }

    public useRouter(pRouterRoot: string, pRouter: Router): void {
        this.mExpress.use(pRouterRoot, pRouter);
    }

    protected processRegisteredControllers(pCallback: Function): void {
        if(this.mControllers && this.mControllers.length > 0) {
            for(var i = 0; i < this.mControllers.length; i++) {
                var controller: NodeWebServerController = this.mControllers[i];
                controller.registerRoutes();
            }
        }
        pCallback();
    }

    protected processRegisteredModels(pCallback: Function): void {
        if(this.mModels && this.mModels.length > 0) {
            for(var i = 0; i < this.mModels.length; i++) {
                var model: NodeWebServerModel<any, any, any> = this.mModels[i];
                model.define();
            }
            for(var i = 0; i < this.mModels.length; i++) {
                var model: NodeWebServerModel<any, any, any> = this.mModels[i];
                model.defineRelationships();
            }
            this.mSequelize.sync(<SyncOptions> {
                logging: console.log
            }).then(() => {
                pCallback();
            });
        }
    }

    protected abstract getListenPort(): number;
}
