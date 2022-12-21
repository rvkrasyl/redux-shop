import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";
import withBookStoreService from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import compose from "../../utils";

import "./book-list.css";

const BookList = ({ books, loading, error, 
    bookstoreService, 
    booksLoaded, booksRequested, booksError }) => {
    // instead of componentDidMount
    useEffect(() => {
        //display spinner while data is loading
        booksRequested();
        // 1. get data
        bookstoreService.getBooks()
        //2. dispatch action to store
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }, []);

    if (error) {
        return <ErrorIndicator err={error} />
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} />
                        </li>
                    )
                })
            }
        </ul>
    );
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);