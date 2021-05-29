import {connect} from 'react-redux'
import {done, remove, filter, edit} from '../actions/index'

const mapStateToProps = state => {
    return {
        tasks : state.tasks,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        done  : id    => dispatch(done(id)),
        filter: value => dispatch(filter(value)),
        remove: id    => dispatch(remove(id)),
        edit  : args  => dispatch(edit(args)),
    }
}

const ListTask = ({tasks, done, filter, remove, edit}) => {

    return(
        <>
            <input type="radio" id="isdone" name="status" onClick = {() => filter(true)}/><label for="isdone">done</label>
            <input type="radio" id="notdone" name="status" onClick = {() => filter(false)} /><label for="notdone">not done</label>
            {/* <input type="radio" id="all" name="status" onClick = {() => filter(-1)}/><label for="all">all</label> */}

            <ul style={{textDecoration : 'None'}}>
                {tasks.map(item => 
                    <li>
                        <input type = 'checkbox' onClick = {() => done(item.id)} />
                        {item.description}
                        <button onClick = {() => remove(item.id)}>Remove</button>
                        <button onClick = {() => edit({id : item.id, desc : 'description'})}>Edit</button>
                    </li>
                )}
            </ul>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);