
import {connect} from 'react-redux'
import {add, load} from '../actions/index'
import ListTask from './ListTask'
import {useRef, useEffect} from 'react'
import './Add.css'

const mapStateToProps = state => {
    return {
        tasks : state.tasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add : desc => dispatch(add(desc)),
        load: ()   => dispatch(load())
    }
}

const Add = ({add, tasks, load}) => {
    const description = useRef('')
    
    useEffect( () => { 
        // localStorage.setItem('tasks', JSON.stringify(tasks));
        load()
    }, [tasks])

    return(
        <div className = 'content'>  
            <div>
                <input type = "text" ref = {description}  />
                <button className = 'add' onClick = {() => add(description.current.value)} >add task</button>
            </div>  
            <ListTask/>     
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);