// //method overiding - runtime polymorphism
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
// class Shape{
//     public area(): number{
//         return 0
//     }
// }
// class Circle extends Shape{
//     constructor(private radius: number){
//         super()
//     }
//     public area(): number{
//         return Math.PI * this.radius * this.radius
//     }    
// }
// class Rectangle extends Shape{
//     constructor(private width: number, private height: number){
//         super()
//     }
//     public area(): number{
//         return this.width * this.height
//     }
// }
// let circle = new Circle(10)
// console.log(circle.area())
// let rectangle = new Rectangle(10,20)
// console.log(rectangle.area())
// //method overloading - compile time polymorphism
// class Example{
//     public area(param1: number, param2?: number): number{
//         return param1 * (param2 ? param2 : 1)
//     }
// }
// let example = new Example()
// console.log(example.area(10))
// console.log(example.area(10,20))
// Practice Problem:
// Create a base class Employee with a method getSalary().
// Extend it into classes FullTimeEmployee and PartTimeEmployee with different salary calculations.
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getSalary = function () {
        return 0;
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(salary, hours) {
        var _this = _super.call(this) || this;
        _this.salary = salary;
        _this.hours = hours;
        return _this;
    }
    FullTimeEmployee.prototype.getSalary = function () {
        return this.salary * this.hours * 100;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(salary, hours) {
        var _this = _super.call(this) || this;
        _this.salary = salary;
        _this.hours = hours;
        return _this;
    }
    PartTimeEmployee.prototype.getSalary = function () {
        return this.salary * this.hours * 50;
    };
    return PartTimeEmployee;
}(Employee));
var fullTimeEmployee = new FullTimeEmployee(10, 20);
console.log(fullTimeEmployee.getSalary());
var partTimeEmployee = new PartTimeEmployee(10, 20);
console.log(partTimeEmployee.getSalary());
