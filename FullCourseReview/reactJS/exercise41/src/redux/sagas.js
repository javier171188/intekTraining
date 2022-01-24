import { call, put, take } from "redux-saga/effects";
import subscriber from './customDataSource';
import { SET_NEW_DATA } from './types';


function* getData() {
    const chan = yield call(subscriber);

    while (true) {
        let newData = yield take(chan)
        yield put({ type: SET_NEW_DATA, payload: newData });
    }

}

export default getData;
