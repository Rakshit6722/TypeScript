var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.calculatePrice = function () {
        return this.price * this.quantity;
    };
    Product.prototype.applyDiscount = function (discount) {
        return this.calculatePrice() - discount;
    };
    return Product;
}());
var product = new Product("Laptop", 50000, 10);
console.log(product.calculatePrice());
console.log(product.applyDiscount(10));
