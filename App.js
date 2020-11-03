import React from 'react';
import { createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import Number from './screens/Number';
import mainReducer from './store/reducers/Number';

const rootReducer = combineReducers({
 count:mainReducer
});

const store = createStore(rootReducer);
export default function App() {
 return(
    <Provider store={store}>
      <Number/>
    </Provider>
  )
}