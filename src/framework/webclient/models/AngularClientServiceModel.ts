import { Model } from "../../core/models/Model";
import { AngularClientApplication } from "../applications/AngularClientApplication";

export abstract class AngularClientServiceModel extends Model {
    public constructor(pApplication: AngularClientApplication<any, any>) {
        super(pApplication);
        this.bind();
    }

    protected bind() {
        var angularClientServiceModel: AngularClientServiceModel = this;
        for(var i in angularClientServiceModel) {
            if(i !== "constructor" && angularClientServiceModel[i] instanceof Function) {
                angularClientServiceModel[i] = angular.bind(angularClientServiceModel, angularClientServiceModel[i]);
            }
        }
    }

    public abstract build(): angular.Injectable<Function>;
}