export default class BookstoreService {

    data = [
        { 
            id: 1, 
            title: "Book to Read",
            author: "Books Writer",
            price: "34",
            coverImage: "https://images.penguinrandomhouse.com/cover/700jpg/9780593158357"
        },
        { 
            id: 2, 
            title: "Book to Inspire",
            author: "Inspirator Jr.",
            price: "37",
            coverImage: "https://i.imgur.com/fci4eba.jpeg"
        },
        { 
            id: 3, 
            title: "Something about Ukraine",
            author: "Serg Zhadan",
            price: "54",
            coverImage: "https://images.penguinrandomhouse.com/cover/700jpg/9780593356159"
        },
        { 
            id: 4, 
            title: "Awesome Blossome",
            author: "Viktor Brightor",
            price: "28",
            coverImage: "https://m.media-amazon.com/images/I/51Tgt4qifyL.jpg"
        },
        { 
            id:5, 
            author: "Uncle Zhora", 
            title: "Jokes and Toureg",
            price: "30",
            coverImage: "https://image0.commarts.com/images1/8/0/6/8/860837_102_1160_LTg2NzQwODc2MjIxMjk3NDc3MzU.jpg"
        }
    ];

    getBooks() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error("Something Bad Happened"));
                } else {
                    resolve(this.data);
                }
                
            }, 700); 
        });
    }
}