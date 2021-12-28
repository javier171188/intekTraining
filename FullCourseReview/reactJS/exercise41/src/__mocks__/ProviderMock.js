import React from "react";
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import reducers from "../redux/reducers";
import rootSaga from "../redux/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            {props.children}
        </Router>
    </Provider>
)

export default ProviderMock;