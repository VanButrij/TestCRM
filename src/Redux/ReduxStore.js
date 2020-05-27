import { createStore, combineReducers } from 'redux';
import MainGridReducer from './MainGridReducer';
import ModulePageReducer from './ModulePageReducer';


let reducers = combineReducers({
    MainGrid: MainGridReducer,
})

let store = createStore(reducers);

export default store;
