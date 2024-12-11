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
var Student1 = /** @class */ (function () {
    function Student1(name) {
        this.grade = [];
        this.name = name;
    }
    Student1.prototype.setGrade = function (grade) {
        this.grade.push(grade);
    };
    Student1.prototype.calculateAverage = function () {
        var sum = this.grade.reduce(function (a, b) { return a + b; }, 0);
        return sum / this.grade.length;
    };
    return Student1;
}());
var student1 = new Student1("Rakshit");
student1.setGrade(10);
student1.setGrade(20);
student1.setGrade(30);
console.log(student1.calculateAverage());
