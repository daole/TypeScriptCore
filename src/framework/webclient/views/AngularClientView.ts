import { View } from "../../core/views/View";
import { AngularClientApplication } from "../applications/AngularClientApplication";

export abstract class AngularClientView extends View {
    public constructor(pApplication: AngularClientApplication<any, any>) {
        super(pApplication);
    }

    public process(): void {
    }

    public abstract isUsingExternalFile(): boolean;
    public abstract getTemplate(): string;
}
