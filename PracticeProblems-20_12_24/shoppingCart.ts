abstract class Product{
    constructor(public productName: string, public modalNumber: number){
        this.productName = productName
        this.modalNumber = modalNumber
    }
    abstract discount: number
    abstract calculatePrice(): number
}

class Electronics extends Product{
    constructor(productName: string, modalNumber: number){
        super(productName, modalNumber)
    }
    discount = 10
    calculatePrice(): number{
        return 1000 - (1000 * this.discount / 100)
    }
}

class Clothing extends Product{
    constructor(productName: string, modalNumber: number){
        super(productName, modalNumber)
    }
    discount = 20
    calculatePrice(): number{
        return 500 - (500 * this.discount / 100)
    }
}

class Groceries extends Product{
    constructor(productName: string, modalNumber: number){
        super(productName, modalNumber)
    }
    discount = 5
    calculatePrice(): number{
        return 200 - (200 * this.discount / 100)
    }
}

class ShoppingCart{
    products: Product[]
    constructor(){
        this.products = []
    }

    addProduct(product: Product): void{
        this.products.push(product)
    }

    removeProduct(product: Product): void{
        this.products = this.products.filter(p => p.modalNumber !== product.modalNumber)
    }

    getProducts(): Product[]{
        return this.products
    }

    calculateTotalPrice(): number{
        let totalPrice = 0
        this.products.forEach(p => {
            totalPrice += p.calculatePrice()
        })
        return totalPrice
    }
}

let electronics = new Electronics("Laptop", 1)
let clothing = new Clothing("Shirt", 2)
let groceries = new Groceries("Rice", 3)

let shoppingCart = new ShoppingCart()
shoppingCart.addProduct(electronics)
shoppingCart.addProduct(clothing)
shoppingCart.addProduct(groceries)

console.log(shoppingCart.getProducts())

console.log(shoppingCart.calculateTotalPrice())

shoppingCart.removeProduct(clothing)

console.log(shoppingCart.getProducts())

console.log(shoppingCart.calculateTotalPrice())