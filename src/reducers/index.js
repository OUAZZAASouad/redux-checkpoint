import {ADD, EDIT, FILTER, DONE, REMOVE, LOAD} from '../vars/index'

function rootReducer(state, action){
    switch (action.type){
        case ADD :
            return Object.assign({}, state, {
                    tasks : state.tasks.concat({
                    id:Math.round(Math.random()*1000), 
                    description: action.payload,
                    isDone : false,
                    toggle : false
                })})
        case DONE : 
            return Object.assign({}, state, {
                    tasks : state.tasks.map(item => item.id !== action.payload ? item : {
                    id : item.id,
                    description : item.description,
                    isDone : ! item.isDone,
                    toggle : false
                } )
            })
                
        case EDIT :
            return Object.assign({}, state, {
                tasks : state.tasks.map(item => item.id !== action.payload.id ? item : {
                id : item.id,
                description : action.payload.desc,
                isDone : item.isDone,
                toggle : !item.toggle
            } )
        })

        case REMOVE :
            return Object.assign({}, state, {
                tasks : state.tasks.filter(item => item.id !== action.payload)
            })
        case FILTER :
            // localStorage stores strings, you need to convert the string to an array
            // localStorage.setItem('tasks', JSON.stringify(state.tasks))
            return Object.assign({}, state, {
                filtredTask : state.tasks.filter(item => item.isDone === action.payload)
            })
        case LOAD :
            return Object.assign({}, state, {
                filtredTask : state.tasks
            })
        default :
            return state
    }

    }
    

export default rootReducer;