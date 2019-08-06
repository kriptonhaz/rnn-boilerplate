import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { compact } from 'lodash';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './createReducer';
import rootSaga from './rootSaga';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = compact([
    thunk.withExtraArgument(),
    sagaMiddleware,
    __DEV__ ? createLogger() : null
  ]);
  
  let debuggWrapper = data => data;

  const store = createStore(
    rootReducer,
    {},
    debuggWrapper(compose(applyMiddleware(...middlewares)))
  );

  persistStore(
    store,
    null,
    () =>{
      store.getState();
    }
  );
  sagaMiddleware.run(rootSaga)

  return store
}