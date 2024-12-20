abstract class Appliance{
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance{
    turnOn(): void{
        console.log("Washing machine turned on")
    }

    turnOff(): void{
        console.log("Washing machine turned off")
    }
}

class AirConditioner extends Appliance{
    turnOn(): void{
        console.log("AC turned on")
    }

    turnOff(): void{
        console.log("AC turned off")
    }
}

class Refrigerator extends Appliance{
    turnOn(): void{
        console.log("Refrigerator turned on")
    }

    turnOff(): void{
        console.log("Refrigerator turned off")
    }
}

let washingMachine = new WashingMachine();
washingMachine.turnOn();
washingMachine.turnOff();

let airConditioner = new AirConditioner();
airConditioner.turnOn();
airConditioner.turnOff();

let refrigerator = new Refrigerator();
refrigerator.turnOn();
refrigerator.turnOff();