// class Animal{
//     name: string;
//     constructor(name: string){
//         this.name = name
//     }
//     makeSound(){
//         console.log("Animal make some sound")
//     }
// }

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

class Vehicle{
    move(){
        console.log("Vehicle is moving")
    }
}

class Car extends Vehicle{
    name:string
    constructor(name:string){
        super()
        this.name = name
    }
    move(){
        console.log(`${this.name} is moving`)
    }
}

let car = new Car("BMW")
car.move()