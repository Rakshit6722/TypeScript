class Animal{

    constructor(protected name: string){
        this.name = name
    }

    makeSound(): void{
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
    makeSound(): void {
        console.log("Bark");
    }
}

class Cat extends Animal{
    constructor(name: string){
        super(name)
    }

    makeSound(): void {
        console.log("Meow");
    }
}

let dog: Dog = new Dog("Tommy")
let cat: Cat = new Cat("Tom")

dog.makeSound()
cat.makeSound()

console.log(dog)
console.log(cat)