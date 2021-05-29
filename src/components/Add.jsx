
import {connect} from 'react-redux'
import {add} from '../actions/index'
import ListTask from './ListTask'
import {useRef} from 'react'

const mapStateToProps = state => {
    return {
        // description : state.description
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: desc => dispatch(add(desc)),
    }
}

const Add = ({add}) => {
    const description = useRef('')
    return(
        <>  
            <input type = "text" ref = {description}/>
            <button onClick = {() => add(description.current.value)} >add task</button>
            <ListTask/>
            
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);