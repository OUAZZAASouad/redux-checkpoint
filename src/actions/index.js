import {ADD, EDIT, FILTER} from '../vars/index'
export function add(){
    return { type : ADD }
}

function filter() {
    return {type : FILTER}
}

function edit() {
    return {type : EDIT}
}