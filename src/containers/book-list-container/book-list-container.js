import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import BookList from "../../components/book-list";
import withBookStoreService from "../../components/hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import compose from "../../utils";

const BookListContainer = ({ books, loading, error, 
    fetchBooks, onAddedToCart }) => {
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

    return <BookList books={books} onAddedToCart={onAddedToCart} />
};

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(dispatch, ownProps.bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
        }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);