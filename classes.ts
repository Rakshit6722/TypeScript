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

class Student{
    name:string
    grade:number

    constructor(name:string, grade:number){
        this.name = name
        this.grade = grade
    }

    printDetails(){
        console.log(`Name: ${this.name}, Grade: ${this.grade}`)
    }
}

let student = new Student("Rakshit", 10)
student.printDetails()