import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";
import withBookStoreService from "../hoc";
import { booksLoaded } from "../../actions";
import compose from "../../utils";

import "./book-list.css";

const BookList = ({ books, loading, bookstoreService, booksLoaded }) => {
    // instead of componentDidMount
    useEffect(() => {
        // 1. get data
        bookstoreService.getBooks()
        //2. dicpatch action to store
            .then((data) => {
                booksLoaded(data);
            });
    }, []);

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

const mapStateToProps = ({ books, loading }) => {
    return { books, loading }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);