export default class BookstoreService {
    getBooks() {
        return [
            { 
                id: 1, 
                title: "Book to Read",
                author: "Books Writer"
            },
            { 
                id: 2, 
                title: "Book to Inspire",
                author: "Inspirator Jr."
            },
        ];
    }
}