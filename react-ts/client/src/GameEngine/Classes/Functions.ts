

export default class Functions {
    functions: any[] = [];

    append(function_: any ) {
        this.functions = function_
    }

    update() {
        this.functions.forEach(f => {
            f();
        })
    }

}