import { Controller} from "../../core/controllers/Controller";
import { AngularClientApplication } from "../applications/AngularClientApplication";
import { AngularClientServiceModel } from "../models/AngularClientServiceModel";
import { AngularScopeHelper } from "../helpers/AngularScopeHelper";
import { AngularClientDirectiveInstance } from "../directives/AngularClientDirective";

export abstract class AngularClientController extends Controller {
    protected mScope: angular.IScope;

    public constructor(pApplication: AngularClientApplication<AngularClientController, AngularClientServiceModel>) {
        super(pApplication);
    }

    protected getDirectiveInstance(pClass: Function, pIndex: number): AngularClientDirectiveInstance {
        return (this.mApplication as AngularClientApplication<AngularClientController, AngularClientServiceModel>).getRegisteredDirectiveByClass(pClass)
            .getInstances()[pIndex];
    }

    protected main(pScope: angular.IScope, ...pInjections: Array<any>): void {
        this.mScope = pScope;
        AngularScopeHelper.bindScope(pScope, this);
    }

    public abstract build(): angular.Injectable<angular.IControllerConstructor>;
}
