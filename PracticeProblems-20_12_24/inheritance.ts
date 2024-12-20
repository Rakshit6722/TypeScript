class Vehicle {
    brand: string;
    speed: number;
    engineStatus: boolean = false;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    startEngine(): void {

        this.engineStatus = true;
        console.log("Engine started")

    }
}

class Car extends Vehicle {
    numberofDoors: number;
    hasSunRoof: boolean;

    constructor(brand: string, speed: number, numberofDoors: number, hasSunRoof: boolean) {
        super(brand, speed);
        this.numberofDoors = numberofDoors;
        this.hasSunRoof = hasSunRoof;
    }

    readyToDrive(): void {
        if (this.engineStatus) {
            console.log("Car is ready to drive")
        } else {
            console.log("Start the engine first")
        }
    }
}

let car = new Car("Toyota", 100, 4, true);
car.startEngine();
car.readyToDrive();



