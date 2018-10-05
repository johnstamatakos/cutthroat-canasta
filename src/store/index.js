import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'FE-TKP-LEADS' })
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const configureStore = () => {
    const store = createStore(rootReducer, enhancer);

    return { store };
};

export default configureStore;
