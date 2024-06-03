import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';






const store = createStore(
    rootReducer,
)

  


export default store;