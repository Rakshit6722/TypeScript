abstract class Character{
    name: string;
    health: number;
    strength: number;
    constructor(name: string, health: number, strength: number){
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    abstract attack(target: Character): void

    abstract defend(target: Character): void
}

class Warrior extends Character{
    constructor(name: string, health: number, strength: number){
        super(name, health, strength)
    }
    attack(target: Character){
        console.log(`${this.name} is attacking ${target.name}`)
        target.defend(this)
    }

    defend(target: Character){
        console.log(`${this.name} is defending against ${target.name}`)
    }
}

let warrior1 = new Warrior("Warrior1", 100, 10)
let warrior2 = new Warrior("Warrior2", 100, 10)
warrior1.attack(warrior2)
warrior2.attack(warrior1)
warrior2.attack(warrior1)
warrior1.attack(warrior2)
warrior2.attack(warrior1)
warrior2.attack(warrior1)
warrior1.attack(warrior2)