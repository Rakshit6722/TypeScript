// class Animal{
//     name: string;
//     constructor(name: string){
//         this.name = name
//     }
//     makeSound(){
//         console.log("Animal make some sound")
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Dog extends Animal{
//     constructor(name: string){
//         super(name)
//     }
//     makeSound(): void {
//         console.log(`${this.name} barks`)
//     }
// }
// let dog = new Dog("Akshit")
// console.log(dog.name)
// dog.makeSound()
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function () {
        console.log("Vehicle is moving");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Car.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Car;
}(Vehicle));
var car = new Car("BMW");
car.move();
