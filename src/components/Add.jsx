
import {connect} from 'react-redux'
import {add} from '../actions/index'

const mapStateToProps = state => {
    return {
        tasks : state.tasks
    }
}
const mapDispatchToProps = {add}

const Add = ({add, tasks}) => {
    console.log(tasks)
    return(
        <>  
            {tasks.map(item => <p>{item.description}</p>)}
            <input type = "text"/>
            <button onClick = {add} >add</button>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);