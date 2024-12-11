// class Person{
//     name:string
//     constructor(name:string){
//         this.name = name
//     }
//     greet():string{
//         return `Hello ${this.name}`
//     }
//     //static method
//     static staticMethod():string{
//         return "I am a static method"
//     }
// }
// console.log(Person.staticMethod())
// let person = new Person("Rakshit")
// console.log(person.name)
// console.log(person.greet())
var Student = /** @class */ (function () {
    function Student(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.printDetails = function () {
        console.log("Name: ".concat(this.name, ", Grade: ").concat(this.grade));
    };
    return Student;
}());
var student = new Student("Rakshit", 10);
student.printDetails();
