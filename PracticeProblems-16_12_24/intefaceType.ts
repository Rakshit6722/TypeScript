interface Person{
    name: string
    age: number
    isStudent: boolean
}

interface Employee extends Person{
    position: string
}


function greet(person: Person): string{
    if(person.isStudent){
        return `Hello, ${person.name}!, you are a student`
    }else{
        return `Hello, ${person.name}!, you are not a student`
    }
}

let student:Person = {
    name:"Rakshit",
    age:21,
    isStudent:true
}

console.log(greet(student))

let employee:Employee = {
    name:"Khattar",
    age:25,
    isStudent:false,
    position:"Software Engineer"
}

console.log(greet(employee))