import {createStore} from 'redux';
import rootReducers from './Reducers/combinereducer';
const store = createStore(rootReducers);
export default store;
