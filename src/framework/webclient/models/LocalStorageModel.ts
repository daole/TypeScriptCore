
import { AngularClientServiceModel } from "./AngularClientServiceModel";
import { AngularClientApplication } from "../applications/AngularClientApplication";

export class LocalStorageModel extends AngularClientServiceModel {
    public constructor(pApplication: AngularClientApplication<any, any>) {
        super(pApplication);
    }

    public build(): angular.Injectable<Function> {
        return [this.main];
    }

    public isStorageAvailable(): boolean {
        return typeof(Storage) !== "undefined";
    }

    public setItem(pKey: string, pValue: string): boolean {
        if(this.isStorageAvailable()) {
            localStorage.setItem(pKey, pValue);
            return true;
        }
        return false;
    }

    public getItem(pKey: string): string | false {
        if(this.isStorageAvailable()) {
            return localStorage.getItem(pKey);
        }
        return false;
    }

    public removeItem(pKey: string): boolean {
        if(this.isStorageAvailable()) {
            localStorage.removeItem(pKey);
            return true;
        }
        return false;
    }

    public clear(): boolean {
        if(this.isStorageAvailable()) {
            localStorage.clear();
            return true;
        }
        return false;
    }

    public key(pIndex: number): string | boolean {
        if(this.isStorageAvailable()) {
            return localStorage.key(pIndex);
        }
        return false;
    }

    private main(): LocalStorageModel {
        return this;
    }
}