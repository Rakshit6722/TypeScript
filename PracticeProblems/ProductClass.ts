class Product{
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public calculatePrice(): number{
        return this.price * this.quantity
    }

    public applyDiscount(discount: number): number{
        return this.calculatePrice() - discount
    } 
}

let product = new Product("Laptop", 50000, 10)
console.log(product.calculatePrice())
console.log(product.applyDiscount(10))