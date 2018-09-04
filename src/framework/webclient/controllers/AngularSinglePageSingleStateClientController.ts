import { AngularSinglePageClientController } from "./AngularSinglePageClientController";
import { AngularSinglePageClientApplication } from "../applications/AngularSinglePageClientApplication";
import { IState } from "angular-ui-router";
import { AngularClientView } from "../views/AngularClientView";
import { Describer } from "../../core/helpers/Describer";

export abstract class AngularSinglePageSingleStateClientController extends AngularSinglePageClientController {
    public constructor(pApplication: AngularSinglePageClientApplication) {
        super(pApplication);
    }

    public buildState(): IState {
        var view: AngularClientView = this.defineStateView();
        return <IState> {
            name: this.defineStateName(),
            template: view ? (view.isUsingExternalFile ? undefined : view.getTemplate()) : undefined,
            templateUrl: view ? (view.isUsingExternalFile ? view.getTemplate() : undefined) : undefined,
            controller: Describer.getClassName(this),
            url: this.defineStateUrl(),
            abstract: this.isAbstractState(),
            cache: this.isStateCached()
        }
    }

    protected isAbstractState(): boolean {
        return undefined;
    }

    protected isStateCached(): boolean {
        return undefined;
    }

    protected abstract defineStateName(): string;
    protected abstract defineStateUrl(): string;
    protected abstract defineStateView(): AngularClientView;
}
