const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
    //display spinner while data is loading
    dispatch(booksRequested());
    // 1. get data
    bookstoreService.getBooks()
    //2. dispatch action to store
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

export {
    fetchBooks,
    bookAddedToCart
};