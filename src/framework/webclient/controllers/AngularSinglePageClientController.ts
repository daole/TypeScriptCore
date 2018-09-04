import { AngularClientController } from "./AngularClientController";
import { AngularSinglePageClientApplication } from "../applications/AngularSinglePageClientApplication";
import { IState } from "angular-ui-router";

export abstract class AngularSinglePageClientController extends AngularClientController {
    public constructor(pApplication: AngularSinglePageClientApplication) {
        super(pApplication);
    }

    public abstract buildState(): IState;
}
