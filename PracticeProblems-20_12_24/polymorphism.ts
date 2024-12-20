// abstract class Appliance{
//     abstract turnOn(): void;
//     abstract turnOff(): void;
// }

// class WashingMachine extends Appliance{
//     turnOn(): void{
//         console.log("Washing machine turned on")
//     }

//     turnOff(): void{
//         console.log("Washing machine turned off")
//     }
// }

// class AirConditioner extends Appliance{
//     turnOn(): void{
//         console.log("AC turned on")
//     }

//     turnOff(): void{
//         console.log("AC turned off")
//     }
// }

// class Refrigerator extends Appliance{
//     turnOn(): void{
//         console.log("Refrigerator turned on")
//     }

//     turnOff(): void{
//         console.log("Refrigerator turned off")
//     }
// }

// let washingMachine = new WashingMachine();
// washingMachine.turnOn();
// washingMachine.turnOff();

// let airConditioner = new AirConditioner();
// airConditioner.turnOn();
// airConditioner.turnOff();

// let refrigerator = new Refrigerator();
// refrigerator.turnOn();
// refrigerator.turnOff();

abstract class Payments{
    abstract processPayment(): void
}

class CreditCardPayment extends Payments{
    processPayment(): void{
        console.log("Credit card payment processed")
    }
}

class UPIPayment extends Payments{
    processPayment(): void{
        console.log("UPI payment processed")
    }
}

class WalletPayment extends Payments{
    processPayment(): void{
        console.log("Wallet payment processed")
    }
}

let creditCardPayment = new CreditCardPayment();
let upiPayment = new UPIPayment();
let walletPayment = new WalletPayment();

let arr: Payments[] = [creditCardPayment, upiPayment, walletPayment]

function processPayments(arr: Payments[]): void{
    arr.forEach(payment => {
        payment.processPayment()
    })
}

processPayments(arr)