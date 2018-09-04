import { Controller } from "../controllers/Controller";
import { Model } from "../models/Model";

export abstract class Application<C extends Controller, M extends Model> {
    protected mName: string;
    protected mControllers: Array<C>
    protected mModels: Array<M>;

    public constructor(pName: string) {
        this.mName = pName;
    }

    public getName(): string {
        return this.mName;
    }

    public getRegisteredControllers(): Array<C> {
        return this.mControllers;
    }

    public getRegisteredModels(): Array<M> {
        return this.mModels
    }

    public getRegisteredControllerByClass(pClass: Function): C {
        for(var i = 0; i < this.mControllers.length; i++) {
            var controller: C = this.mControllers[i];
            if(controller instanceof pClass) {
                return controller;
            }
        }
        return null;
    }

    public getRegisteredModelByClass(pClass: Function): M {
        for(var i = 0; i < this.mModels.length; i++) {
            var model: M = this.mModels[i];
            if(model instanceof pClass) {
                return model;
            }
        }
        return null;
    }

    protected registerComponents(): void {
        var application: Application<C, M> = this;
        this.mControllers = this.registerControllers();
        this.mModels = this.registerModels();
        this.processRegisteredControllers(() => {
            application.processRegisteredModels(() => {
                application.postComponentsRegistrationProcess();
            });
        });
    }

    protected postComponentsRegistrationProcess(): void {
    }

    protected start(): void {
        this.registerComponents();
    }

    protected abstract registerControllers(): Array<C>;
    protected abstract registerModels(): Array<M>;
    protected abstract processRegisteredControllers(pCallback: Function): void;
    protected abstract processRegisteredModels(pCallback: Function): void;
}