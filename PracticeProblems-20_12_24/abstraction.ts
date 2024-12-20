// abstract class Employee1{
//     constructor(public name: string, public salary: number){
//         this.name = name;
//         this.salary = salary;
//     }

//     abstract calculateBonus(): number
// }

// class Manager extends Employee1{
//     constructor(name: string, salary: number){
//         super(name, salary);
//     }

//     calculateBonus(): number{
//         return this.salary * 0.5;
//     }
// }

// class Developer extends Employee1{
//     constructor(name: string, salary: number){
//         super(name, salary);
//     }

//     calculateBonus(): number{
//         return this.salary * 0.3;
//     }
// }

// class Intern extends Employee1{
//     constructor(name: string, salary: number){
//         super(name, salary);
//     }

//     calculateBonus(): number{
//         return this.salary * 0.2;
//     }
// }

// let manager = new Manager("John", 50000);
// let developer = new Developer("Alice", 30000);
// let intern = new Intern("Bob", 20000);

// console.log(manager.calculateBonus())
// console.log(developer.calculateBonus())
// console.log(intern.calculateBonus())


abstract class Documen1t{
    constructor(public name: string){
        this.name = name;
    }

    abstract printDocument(): void
}

class PDFDocument extends Documen1t{
    constructor(name: string){
        super(name);
    }

    printDocument(): void{
        console.log("Printing PDF Document")
    }
}

class WordDocument extends Documen1t{
    constructor(name: string){
        super(name);
    }

    printDocument(): void{
        console.log("Printing Word Document")
    }
}

let pdf = new PDFDocument("SamplePDF");
pdf.printDocument();

let word = new WordDocument("SampleWord");
word.printDocument();
