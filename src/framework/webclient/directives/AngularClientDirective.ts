import { AngularClientApplication } from "../applications/AngularClientApplication";
import { read } from "fs";
import { Injectable, IDirectiveFactory, IAttributes, IDirective, ITranscludeFunction, IController, IScope } from "angular";
import { AngularClientView } from "../views/AngularClientView";
import { AngularScopeHelper } from "../helpers/AngularScopeHelper";

export abstract class AngularClientDirective {
    protected mApplication: AngularClientApplication<any, any>;
    protected mInstances: Array<AngularClientDirectiveInstance>;

    public constructor(pApplication: AngularClientApplication<any, any>) {
        this.mApplication = pApplication;
        this.mInstances = [];
    }

    public getApplication(): AngularClientApplication<any, any> {
        return this.mApplication;
    }

    public getInstances(): Array<AngularClientDirectiveInstance> {
        return this.mInstances;
    }

    protected create(): IDirective<any> {
        var view: AngularClientView = this.defineView();
        var directive: IDirective<any> = {
            replace: this.isReplaced(),
            transclude: this.isTransclude(),
			restrict : this.defineRestrict(),
            scope: this.defineScope(),
			link: this.defineLink(),
        };
        if(view && view.isUsingExternalFile()) {
            directive.templateUrl = view.getTemplate();
        } else if(view && !view.isUsingExternalFile()) {
            directive.template = view.getTemplate();
        }
        return directive;
    }

    protected isReplaced(): boolean {
        return true;
    }

    protected isTransclude(): boolean {
        return undefined;
    }

    protected defineScope(): any {
        return undefined;
    }

    protected defineLink(): (pScope: angular.IScope, pInstanceElement: JQLite, pInstanceAttributes: IAttributes, pController?: IController | IController[] | {[key: string]: IController}, pTransclude?: ITranscludeFunction) => void {
        return undefined;
    }

    protected createInstance(pScope: IScope, pInstanceElement: JQLite): AngularClientDirectiveInstance {
        return undefined;
    }

    protected bindScope(pScope: IScope, pInstanceElement: JQLite) {
        var instance: AngularClientDirectiveInstance = this.createInstance(pScope, pInstanceElement);
        AngularScopeHelper.bindScope(pScope, instance);
        instance.initialize();
        this.mInstances.push(instance);
        pScope.$on("$destroy", () => {
            for(var i = 0; i < this.mInstances.length; i++) {
                var instance: AngularClientDirectiveInstance = this.mInstances[i];
                if(instance.getScope() == pScope) {
                    this.mInstances.splice(i, 1);
                    break;
                }
            }
        });
    }

    public abstract build(): Injectable<IDirectiveFactory<any>>;
    protected abstract defineRestrict(): string;
    protected abstract defineView(): AngularClientView;
}

export abstract class AngularClientDirectiveInstance {
    protected mApplication: AngularClientApplication<any, any>;
    protected mScope: IScope;
    protected mInstanceElement: JQLite;

    public constructor(pApplication: AngularClientApplication<any, any>, pScope: IScope, pInstanceElement: JQLite) {
        this.mApplication = pApplication;
        this.mScope = pScope;
        this.mInstanceElement = pInstanceElement;
    }

    public getApplication(): AngularClientApplication<any, any> {
        return this.mApplication;
    }

    public getScope(): IScope {
        return this.mScope;
    }

    public getInstanceElement(): JQLite {
        return this.mInstanceElement;
    }

    public initialize(): void {
    }
}