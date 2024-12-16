abstract class Shape1{
    abstract area(): number
}

class Circle1 extends Shape1{
    constructor(private radius: number){
        super()
    }

    area(): number{
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle1 extends Shape1{
    constructor(private length: number, private breadth: number){
        super()
    }

    area(): number{
        return this.length * this.breadth
    }
}

let circle1 = new Circle1(5)
let rectangle1 = new Rectangle1(5, 10)

console.log(circle1.area().toFixed(2))
console.log(rectangle1.area())

