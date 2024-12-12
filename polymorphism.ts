// //method overiding - runtime polymorphism

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

class Employee{
    public getSalary(): number{
        return 0;
    }
}

class FullTimeEmployee extends Employee{
    constructor(private salary: number, private hours: number){
        super()
    }

    public getSalary(): number{
        return this.salary*this.hours*100
    }
}

class PartTimeEmployee extends Employee{
    constructor(private salary: number, private hours: number){
        super()
    }

    public getSalary(): number {
        return this.salary*this.hours*50
    }
}

let fullTimeEmployee = new FullTimeEmployee(10, 20)
console.log(fullTimeEmployee.getSalary())

let partTimeEmployee = new PartTimeEmployee(10, 20)
console.log(partTimeEmployee.getSalary())

