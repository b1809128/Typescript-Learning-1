interface btnProcess {
    type: string, value: string
}


//TODO: Function
const add: Function = (a: number, b: number): number => a + b
const substract: Function = (a: number, b: number): number => a - b
const divide: Function = (a: number, b: number): number => a / b
const multiply: Function = (a: number, b: number): number => a * b

const operations: { [index: string]: Function } = {
    '+': add, '-': substract, '/': divide, '*': multiply
}

class MyCalculator {
    currentTotal: number = 0;
    currentOperator: string = "";
    clearNumber: boolean = false;
    display: string = "";
    history: Array<number> = [];

    constructor() {
        this.history = [];
        this.display = "";
        this.clearNumber = false;
    }

    execute = () => {

    }
}