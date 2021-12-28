import { call, put, take } from "redux-saga/effects";
import subscriber from './customDataSource';


function* getData() {
    const chan = yield call(subscriber);

    while (true) {
        let newData = yield take(chan)
        yield put({ type: "SET_NEW_DATA", payload: newData });
    }

}

export default getData;
