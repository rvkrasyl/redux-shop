import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import withBookStoreService from "../hoc";
import { booksLoaded } from "../../actions";
import compose from "../../utils";

import "./book-list.css";

const BookList = ({ books, bookstoreService, booksLoaded }) => {

    useEffect(() => {
        // 1. get data
        const data = bookstoreService.getBooks();
        //2. dicpatch action to store
        booksLoaded(data);
    }, []);

    return (
        <ul>
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

const mapStateToProps = ({ books }) => {
    return { books }
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);