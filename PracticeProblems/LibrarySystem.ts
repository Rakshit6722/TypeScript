class Book{
    public title: string;
    private author: string;
    private quantity: number;

    constructor(title: string, author: string, quantity: number){
        this.title = title;
        this.author = author;
        this.quantity = quantity;
    }

}

class Library{
    private books: Book[] = []

    addBook(book: Book){
        this.books.push(book)
    }

    displayBooks(){
        this.books.forEach(book => {
            console.log(book)
        })
    }

    searchBook(title: string): number {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === title) {
                return i;  
            }
        }
        return -1; 
    }

    removeBook(title: string){
        let index = this.searchBook(title)
        if(index !== -1){
            this.books.splice(index, 1)
        }
        this.displayBooks()
    }
}

let book1 = new Book("The Alchemist", "Paulo Coelho", 10)
let book2 = new Book("The Alchemist", "Paulo Coelho", 10)
let book3 = new Book("The Alchemist", "Paulo Coelho", 10)
let book4 = new Book("The Alchemist", "Paulo Coelho", 10)

let library = new Library()
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.displayBooks()
console.log(library.searchBook("The Alchemist"))
library.removeBook("The Alchemist")