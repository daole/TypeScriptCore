import { Application } from "../../core/applications/Application";
import { AngularClientController } from "../controllers/AngularClientController";
import { AngularClientServiceModel } from "../models/AngularClientServiceModel";
import { Describer } from "../../core/helpers/Describer";
import { AngularClientDirective } from "../directives/AngularClientDirective";

export abstract class AngularClientApplication<C extends AngularClientController, M extends AngularClientServiceModel> extends Application<C, M> {
    protected mModule: angular.IModule;
    protected mDirectives: Array<AngularClientDirective>;

    public constructor(pName: string) {
        super(pName);
    }

    public getModule(): angular.IModule {
        return this.mModule;
    }

    public getRegisteredDirectives(): Array<AngularClientDirective> {
        return this.mDirectives;
    }

    public start(): void {
        this.registerComponents();
    }

    protected registerComponents(): void {
        this.registerModule();
        super.registerComponents();
    }

    public getRegisteredDirectiveByClass(pClass: Function): AngularClientDirective {
        for(var i = 0; i < this.mDirectives.length; i++) {
            var directive: AngularClientDirective = this.mDirectives[i];
            if(directive instanceof pClass) {
                return directive;
            }
        }
        return null;
    }

    protected registerModule(): void {
        this.mModule = angular.module(this.mName, this.defineRequires());
        this.configureModule(this.mModule);
        this.runModule(this.mModule);
    }

    protected processRegisteredControllers(pCallback: Function): void {
        if(this.mControllers && this.mControllers.length > 0) {
            for(var i = 0; i < this.mControllers.length; i++) {
                var controller: AngularClientController = this.mControllers[i];
                this.mModule.controller(Describer.getClassName(controller), controller.build());
            }
        }
        pCallback();
    }

    protected processRegisteredModels(pCallback: Function): void {
        if(this.mModels && this.mModels.length > 0) {
            for(var i = 0; i < this.mModels.length; i++) {
                var model: AngularClientServiceModel = this.mModels[i];
                this.mModule.factory(Describer.getClassName(model), model.build());
            }
        }
        pCallback();
    }

    protected processRegisteredDirectives(pCallback?: Function): void {
        if(this.mDirectives && this.mDirectives.length > 0) {
            for(var i = 0; i < this.mDirectives.length; i++) {
                var directive: AngularClientDirective = this.mDirectives[i];
                var directiveName = Describer.getClassName(directive);
                directiveName = directiveName.charAt(0).toLowerCase() + directiveName.slice(1);
                this.mModule.directive(directiveName, directive.build());
            }
        }
        if(pCallback) {
            pCallback();
        }
    }

    protected postComponentsRegistrationProcess(): void {
        this.mDirectives = this.registerDirectives();
        this.processRegisteredDirectives();
    }

    protected configureModule(pModule: angular.IModule): void {
    }

    protected runModule(pModule: angular.IModule): void {
    }

    protected abstract defineRequires(): Array<string>;
    protected abstract registerDirectives(): Array<AngularClientDirective>;
}
