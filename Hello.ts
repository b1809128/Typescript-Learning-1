/**
 * npm install -g typescript
 * npm install -g ts-node 
 * tsc --init
 * create filename.ts
 * ts-node filename.ts
 * tsc filename.ts => filename.js
 */
//TODO: CLASS
class Hello {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

//TODO: FUNCTION
let copyData: Function;
copyData = (data: string) => {
    let dataCopy; dataCopy = data
    return data + "-" + dataCopy;
}
// console.log(copyData("TypeScript is languages development by JavaScript"));


const firstName = new Hello("Typescript is back end Language");
// console.log(firstName.getName());

//TODO: TYPE AND OBJECT
type Person = {
    age: number;
    name: string;
}

interface Animal {
    type: string;
    species: string;
}

const myPerson: Person = {
    age: 22,
    name: "nhqhuy"
}

let myAnimal: Animal = {
    type: "dog",
    species: "Pug"
}

//TODO: ARRAY
let peopleArray: Array<Person> = []
peopleArray.push({
    age: 22, name: "nttanh"
})

peopleArray.push(myPerson)

for (const person of peopleArray) {
    // console.log(person);
}

const obj: { age: number, name: string } = JSON.parse(`{
    "age":19, "name": "npthao"
}`)

console.log(obj);
