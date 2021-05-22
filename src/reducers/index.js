import {ADD, EDIT, FILTER} from '../vars/index'

function rootReducer(state, action){
    if (action.type === ADD){
        return {tasks : [...state.tasks, state.newTask]}
    }
    else if (action.type === EDIT){
        return {
            tasks : [...state.tasks.filter(item => item.id !== state.updated_task.id), state.updated_task]
        }
    }

    else if (action.type === FILTER){
        return {
            tasks : state.tasks.filter(item => item.isDone === state.isDone)
        }
    }
    else {
        return state
    }
        
}

export default rootReducer;