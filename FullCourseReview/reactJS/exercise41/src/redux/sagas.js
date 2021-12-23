import { all, put, takeEvery } from "redux-saga/effects";
let x = 0
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
}
function* getDataSaga() {
    yield takeEvery("GET_NEW_DATA", () => getData());
}

export default function* rootSaga() {
    yield all([
        getDataSaga()
    ]);
}