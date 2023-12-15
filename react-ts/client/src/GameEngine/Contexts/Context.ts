

export default class Context {
    private context: any = {};
    addPropertie(name: string, value: any): boolean | null {
        if (!this.context[name]) {
            this.context[name] = value;
            return true;
        }else {
            return null;
        }

    }
    getPropertie(name: string): any {
        return this.context[name];
    }
}