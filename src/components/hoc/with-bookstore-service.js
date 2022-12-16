import React from "react";
import { BookstoreServiceContextConsumer } from "../bookstore-service-context";

const withBookstoreService = () => (WrappedComponent) => {
    return (props) => {
        return (
            <BookstoreServiceContextConsumer>
                {
                    (bookstoreService) => {
                        return <WrappedComponent {...props} bookstoreService={bookstoreService}/>
                    }
                }
            </BookstoreServiceContextConsumer>
        );
    }
}

export default withBookstoreService;