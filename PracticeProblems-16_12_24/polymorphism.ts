function describleAnimal(animal: Animal1): void {
    animal.makeSound();
}

class Animal1{

    constructor(protected name: string){
        this.name = name
    }

    makeSound(): void{
        console.log("Animal makes a sound");
    }
}

class Dog1 extends Animal1{
    constructor(name: string){
        super(name)
    }
    makeSound(): void {
        console.log("Bark");
    }
}

class Cat1 extends Animal1{
    constructor(name: string){
        super(name)
    }

    makeSound(): void {
        console.log("Meow");
    }
}

let dog1 = new Dog1("Tommy");
let cat1 = new Cat1("Tom");

describleAnimal(dog1);
describleAnimal(cat1);

abstract class Shape{
    abstract draw(): void
}

class Circle extends Shape{
    draw(){
        console.log("Draw a circle");
    }
}

class Rectangle extends Shape{
    draw(){
        console.log("Draw a rectangle");
    }
}

let circle = new Circle()
let rectangle = new Rectangle()

circle.draw()
rectangle.draw()
