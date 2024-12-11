//public properties are accessible everywhere
//private properites are only accessible within the class only
//protected properties are accessible within the class and its subclasses

// class BankAccount{
//     private balance: number

//     constructor(initialBalance: number){
//         this.balance = initialBalance
//     }

//     deposit(amount: number){
//         this.balance += amount
//     }

//     getBalance():number{
//         return this.balance
//     }
// }

// let account = new BankAccount(1000)
// account.deposit(500)
// console.log(account.getBalance())

class Student1{
    private name:string
    private grade: number[] = []

    constructor(name:string){
        this.name = name
    }

    setGrade(grade:number){
        this.grade.push(grade)
    }

    calculateAverage(){
        let sum = this.grade.reduce((a,b) => a+b, 0)
        return sum/this.grade.length
    }
}

let student1 = new Student1("Rakshit")
student1.setGrade(10)
student1.setGrade(20)
student1.setGrade(30)
console.log(student1.calculateAverage())

