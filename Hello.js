/**
 * npm install -g typescript
 * npm install -g ts-node
 * create filename.ts
 * ts-node filename.ts
 * tsc filename.ts => filename.js
 */
var Hello = /** @class */ (function () {
  function Hello(name) {
    this.name = name;
  }
  Hello.prototype.getName = function () {
    return this.name;
  };
  return Hello;
})();
var copyData;
copyData = function (data) {
  var dataCopy;
  dataCopy = data;
  return data + "-" + dataCopy;
};
console.log(copyData("TypeScript is languages development by JavaScript"));
var firstName = new Hello("Typescript is back end Language");
console.log(firstName.getName());
