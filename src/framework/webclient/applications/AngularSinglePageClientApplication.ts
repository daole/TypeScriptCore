import { AngularClientApplication } from "./AngularClientApplication";
import { IStateProvider, IUrlRouterProvider } from "angular-ui-router";
import { AngularSinglePageClientController } from "../controllers/AngularSinglePageClientController";
import { AngularClientServiceModel } from "../models/AngularClientServiceModel";

export abstract class AngularSinglePageClientApplication extends AngularClientApplication<AngularSinglePageClientController, AngularClientServiceModel> {
    public constructor(pName: string) {
        super(pName);
    }

    protected configureModule(pModule: angular.IModule): void {
        var application: AngularSinglePageClientApplication = this;
        pModule.config(["$stateProvider", "$urlRouterProvider", (pStateProvider: IStateProvider, pUrlRouterProvider: IUrlRouterProvider): void => {
            application.configureRoutes(pStateProvider, pUrlRouterProvider);
        }]);
    }

    protected configureRoutes(pStateProvider: IStateProvider, pUrlRouterProvider: IUrlRouterProvider) {
        for(var i = 0; i < this.mControllers.length; i++) {
            var controller: AngularSinglePageClientController = this.mControllers[i];
            pStateProvider.state(controller.buildState());
        }
        pUrlRouterProvider.otherwise(this.buildDefaultRoute());
    }

    protected buildDefaultRoute(): string {
        return "/";
    }
}
