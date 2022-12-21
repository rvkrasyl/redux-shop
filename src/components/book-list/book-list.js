import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { connect } from "react-redux";
import withBookStoreService from "../hoc";
import { fetchBooks } from "../../actions";
import compose from "../../utils";

import "./book-list.css";

const BookList = ({ books, loading, error, 
    fetchBooks }) => {
    // instead of componentDidMount
    useEffect(() => {
        fetchBooks();
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(dispatch, ownProps.bookstoreService)
        }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);