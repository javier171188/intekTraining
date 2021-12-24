import { all, call, put, take, takeEvery } from "redux-saga/effects";
import subscriber from './customDataSource';
import { eventChannel, runSaga } from 'redux-saga'


function* getData() {
    const chan = yield call(subscriber);

    while (true) {
        let newData = yield take(chan)
        yield put({ type: "SET_NEW_DATA", payload: newData });
    }

}

export default getData;
/*
function* getData() {
    x += 1;
    yield put({
        type: "SET_NEW_DATA",
        payload: [
            { argument: 1, value: 1 },
            { argument: 2, value: 2 },
            { argument: x, value: 3 },
        ]
    });
}*/

/*
function* getDataSaga() {
    yield takeEvery("GET_NEW_DATA", () => getData());
}

export default function* rootSaga() {
    yield all([
        getDataSaga()
    ]);
}*/