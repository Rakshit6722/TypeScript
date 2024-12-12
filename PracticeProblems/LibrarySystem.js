var Book = /** @class */ (function () {
    function Book(title, author, quantity) {
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.displayBooks = function () {
        this.books.forEach(function (book) {
            console.log(book);
        });
    };
    Library.prototype.searchBook = function (title) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return i;
            }
        }
        return -1;
    };
    Library.prototype.removeBook = function (title) {
        var index = this.searchBook(title);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
        this.displayBooks();
    };
    return Library;
}());
var book1 = new Book("The Alchemist", "Paulo Coelho", 10);
var book2 = new Book("The Alchemist", "Paulo Coelho", 10);
var book3 = new Book("The Alchemist", "Paulo Coelho", 10);
var book4 = new Book("The Alchemist", "Paulo Coelho", 10);
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.displayBooks();
console.log(library.searchBook("The Alchemist"));
library.removeBook("The Alchemist");
