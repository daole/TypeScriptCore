import { IScope } from "angular";

export class AngularScopeHelper {
    public static bindScope(pScope: IScope, pFunctionsHolder: any, pFunctionNamePrefix?: string) {
        for(var i in pFunctionsHolder) {
            if(pFunctionsHolder[i] instanceof Function && (!pFunctionNamePrefix || i.indexOf(pFunctionNamePrefix) === 0)) {
                pFunctionsHolder[i] = angular.bind(pFunctionsHolder, pFunctionsHolder[i]);
                pScope[i] = pFunctionsHolder[i];
            }
        }
    }
}