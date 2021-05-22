import {createStore} from 'redux'
import rootReducer from '../reducers/index'

const initState = {
    tasks         : [{id : 1, description : 'redux checkpoint',isDone : false }],
    // newTask          :{id : 2, description : 'API checkpoint',isDone : false },
    // updated_task  : {},
    // isDone        : true 
}

const store = createStore(rootReducer, initState);

export default store;