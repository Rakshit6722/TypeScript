class Book {
    constructor(public title: string, public author: string, public availabilityStatus: boolean) {
        this.title = title;
        this.author = author;
        this.availabilityStatus = availabilityStatus;
    }
}

class Library {
    public books: Book[]
    constructor() {
        this.books = []
    }

    addBook(book: Book): void {
        this.books.push(book)
    }

    removeBook(book: Book): void {
        this.books = this.books.filter(b => b.title !== book.title)
    }

    borrow(book: Book): void {
        let bookIndex = -1
        this.books.forEach((b, ind) => {
            if (b.title === book.title) {
                bookIndex = ind
                return
            }
        }
        )
        if (bookIndex !== -1) {
            if (this.books[bookIndex].availabilityStatus === false) {
                console.log(`Book not available: ${book.title}`)
                return
            }
            this.books[bookIndex].availabilityStatus = false
        }
        console.log(`Book borrowed: ${book.title}`)
    }

    returnBook(book: Book): void {
        let bookIndex = -1
        this.books.forEach((b, ind) => {
            if (b.title === book.title) {
                bookIndex = ind
                return
            }
        }
        )
        if (bookIndex !== -1) {
            if (this.books[bookIndex].availabilityStatus === true) {
                console.log(`Book already returned: ${book.title}`)
                return
            }
            this.books[bookIndex].availabilityStatus = true
        }
        console.log(`Book returned: ${book.title}`)
    }
}

let book1 = new Book("The Alchemist", "Paulo Coelho", true)
let book2 = new Book("The Da Vinci Code", "Dan Brown", true)
let book3 = new Book("The Monk Who Sold His Ferrari", "Robin Sharma", true)
let book4 = new Book("The Power of Now", "Eckhart Tolle", false)

let library = new Library()
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)

library.borrow(book4)
library.borrow(book1)
library.borrow(book4)
library.returnBook(book1)
library.borrow(book1)
library.returnBook(book1)