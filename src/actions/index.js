import {ADD, EDIT, FILTER, DONE, REMOVE, LOAD} from '../vars/index'

export function add(payload){
    return { type : ADD,
             payload
            }
}

export function filter(payload) {
    return {type  : FILTER,
            payload
    }
}

export function edit(payload){
    return { type : EDIT,
             payload }
    
}

export function done(payload){
    return { type : DONE,
        payload
       }
}

export function remove(payload){
    return { type : REMOVE,
        payload
       }
}

export function load(){
    return {
        type : LOAD
    }
}


