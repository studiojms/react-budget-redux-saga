import { combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { reducer as entriesReducer } from '../reducers/entries.reducer';
import { reducer as modalsReducer } from '../reducers/modals.reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const combinedReduces = combineReducers({ entries: entriesReducer, modals: modalsReducer });

  return createStore(combinedReduces, composeEnhancers());
};

export default configureStore;
