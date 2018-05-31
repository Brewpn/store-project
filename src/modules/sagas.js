import { saga as clientAssortment } from './client';
import { all } from 'redux-saga/effects'


function* mySaga() {
    return yield all([
        ...clientAssortment,
    ]);
}

export default mySaga;