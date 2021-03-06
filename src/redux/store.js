import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import phonebookReducer from './reducers/phonebookReducer';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});
const middleWares = [ReduxThunk];
const enhancer = applyMiddleware(...middleWares);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store); //для будущей авторизации

// c toolkit
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import phonebookReducer from './reducers/phonebookReducer';

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
