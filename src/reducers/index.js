import {ADD, EDIT, FILTER, DONE, REMOVE} from '../vars/index'

function rootReducer(state, action){
    switch (action.type){
        case ADD :
            return Object.assign({}, state, {
                    tasks : state.tasks.concat({
                    id:Math.round(Math.random()*1000), 
                    description: action.payload,
                    isDone : false
                })})
        case DONE : 
    
            return Object.assign({}, state, {
                    tasks : state.tasks.map(item => item.id !== action.payload ? item : {
                    id : item.id,
                    description : item.description,
                    isDone : ! item.isDone
                } )
            })
                
        case EDIT :
            return Object.assign({}, state, {
                tasks : state.tasks.map(item => item.id !== action.payload.id ? item : {
                id : item.id,
                description : action.payload.desc,
                isDone : item.isDone
            } )
        })

        case REMOVE :
            return Object.assign({}, state, {
                tasks : state.tasks.filter(item => item.id !== action.payload)
            })
        case FILTER :
            // window.location.reload()
            return Object.assign({}, state, {
                tasks : state.tasks.filter(item => item.isDone === action.payload)
            })
        default :
            return state
    }

    }
    

export default rootReducer;