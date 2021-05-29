import {createStore} from 'redux'
import rootReducer from '../reducers/index'

const initState = {
    tasks         : [{id : 1, description : 'redux checkpoint',isDone : false }],
    // filtredTask   : [{id : 1, description : 'redux checkpoint',isDone : false }],
}

const store = createStore(rootReducer, initState);

export default store;