
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: "Book1",
            count: 3,
            total: 150
        },
        {
            id: 2,
            name: "Book 2",
            count: 4,
            total: 120
        },
        {
            id: 3,
            name: "Book 3",
            count: 1,
            total: 70
        },
    ],
    orderTotal: 340
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_REQUEST" :
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case "FETCH_BOOKS_SUCCESS" : 
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case "FETCH_BOOKS_FAILURE" : {
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        }
        default: 
            return state;
    }
}

export default reducer;