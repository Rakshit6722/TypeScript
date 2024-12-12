// abstract class Vehicle1{
//     constructor(public name: string){}
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
//     abstract start(): void
// }
// class Bicycle extends Vehicle1{
//     public start(): void{
//         console.log("Bicycle is started")
//     }
// }
// class Car1 extends Vehicle1{
//     public start(): void{
//         console.log("Car is started")
//     }
// }
// let bicycle = new Bicycle("Hero")
// bicycle.start()
// let car1 = new Car1("BMW")
// car1.start()
// Practice Problem:
// Create an abstract class Appliance with an abstract method operate().
// Extend it to classes like WashingMachine and AirConditioner.
var Appliance = /** @class */ (function () {
    function Appliance(name) {
        this.name = name;
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.operate = function () {
        return "Washing Machine is operating";
    };
    return WashingMachine;
}(Appliance));
var AirConditioner = /** @class */ (function (_super) {
    __extends(AirConditioner, _super);
    function AirConditioner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AirConditioner.prototype.operate = function () {
        return "Air Conditioner is operating";
    };
    return AirConditioner;
}(Appliance));
var washingMachine = new WashingMachine("Samsung");
console.log(washingMachine.operate());
var airConditioner = new AirConditioner("LG");
console.log(airConditioner.operate());
