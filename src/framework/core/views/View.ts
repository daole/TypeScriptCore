import { Application } from "../applications/Application";

export abstract class View {
    protected mApplication: Application<any, any>;

    public constructor(pApplication: Application<any, any>) {
        this.mApplication = pApplication;
    }

    public getApplication(): Application<any, any> {
        return this.mApplication;
    }

    public abstract process(): void;
}