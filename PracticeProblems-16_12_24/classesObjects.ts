class Car{
    model: string
    year: number
    color: string

    constructor(model: string, year: number, color: string){
        this.model = model
        this.year = year
        this.color = color
    }

    startEngine(): void{
        console.log("Engine started")
    }
}

class ElectricCar extends Car{
    chargeBattery(): void{
        console.log("Battery charged")
    }
}

let car1: Car = new Car("Audi", 2021, "Black")
let car2: ElectricCar = new ElectricCar("Tesla", 2021, "Red")

car1.startEngine()
car2.startEngine()
car2.chargeBattery()

console.log(car1)
console.log(car2)