import createSagaMiddleware from 'redux-saga';
import mySaga from '../modules/sagas';

const sagaMiddleware = createSagaMiddleware();

export function runSaga() {
    return sagaMiddleware.run(mySaga);
}

export default sagaMiddleware;