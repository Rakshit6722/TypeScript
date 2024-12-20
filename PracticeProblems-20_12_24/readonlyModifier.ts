interface Person{
    readonly name: string;
    readonly age: number;
}

let person: Person={
    name:"Rakshit",
    age:23
}

console.log(person.name)
console.log(person.age)

// person.name = "Raghav" //error