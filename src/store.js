import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const stringMiddleware = () => (nextDispatch) => (action) => {
    if (typeof action === "string") {
        return nextDispatch({
            type: action
        });
    }
    return nextDispatch(action);
};
const logMiddleware = () => (nextDispatch) => (action) => {
    console.log(action.type);
    return nextDispatch(action);
};


const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch("STRING_ACTION_HERE");

export default store;