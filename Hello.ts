/**
 * npm install -g typescript
 * npm install -g ts-node 
 * create filename.ts
 * tsn-node filename.ts
 */
class Hello{
    name: string;
    constructor(name:string){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

const firstName = new Hello("Typescript is back end Language");
console.log(firstName.getName());