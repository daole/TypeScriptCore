export class Describer {
    public static getClassName(pObject: Object): string {
        var functionNameRegex: RegExp = /function (.{1,})\(/;
        var results = functionNameRegex.exec(pObject.constructor.toString());
        return results && results.length > 1 ? results[1] : "";
    }
}