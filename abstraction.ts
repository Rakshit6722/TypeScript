// abstract class Vehicle1{
//     constructor(public name: string){}

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

abstract class Appliance{
    constructor(public name: string){}

    abstract operate(): string
}

class WashingMachine extends Appliance{
    public operate(): string{
        return "Washing Machine is operating"
    }
}

class AirConditioner extends Appliance{
    public operate(): string{
        return "Air Conditioner is operating"
    }
}

let washingMachine = new WashingMachine("Samsung")
console.log(washingMachine.operate())

let airConditioner = new AirConditioner("LG")
console.log(airConditioner.operate())