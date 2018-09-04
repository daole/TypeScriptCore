import { AngularSinglePageClientApplication } from "../../webclient/applications/AngularSinglePageClientApplication";

export abstract class IonicApplication extends AngularSinglePageClientApplication {
    public constructor(pName: string) {
        super(pName);
    }

    protected defineRequires(): Array<string> {
        return ["ionic"];
    }

    protected runModule(pModule: angular.IModule): void {
        pModule.run(["$ionicPlatform", (pIonicPlatform: ionic.platform.IonicPlatformService) => {
            pIonicPlatform.ready(() => {
                if(window["cordova"] && window["cordova"].plugins["Keyboard"]) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
                    cordova.plugins["Keyboard"].hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins["Keyboard"].disableScroll(true);
                }
                if(window["StatusBar"]) {
                    StatusBar.styleDefault();
                }
            });
        }]);
    }
}