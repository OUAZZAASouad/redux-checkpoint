import { useRef, useState } from 'react'
import {connect} from 'react-redux'
import {done, remove, filter, edit} from '../actions/index'

const mapStateToProps = state => {
    return {
        filtredTask : state.filtredTask,
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

const ListTask = ({filtredTask, done, filter, remove, edit}) => {

    const description = useRef('');
    console.log(filtredTask) 
    return(
        <div style = {{width : '100%'}}>
            <div>
                <input type="radio" id="isdone" name="status" onClick = {() => filter(true)}/><label for="isdone">done</label>
                <input type="radio" id="notdone" name="status" onClick = {() => filter(false)} /><label for="notdone">not done</label>
            </div>
            
            <ul style={{textDecoration : 'None'}}>
                {filtredTask.map(item => 
                    <li key = {item.id} style = {{marginBottom : '10px'}}>
                        <div style = {{display : 'grid', gridTemplateColumns : '2fr 1fr'}}>
                            <div style = {{display : 'flex'}}>
                                <input type = 'checkbox' onClick = {() => done(item.id)} />
                                {item.toggle? <input type = 'text' defaultValue = {item.description} ref = {description} /> : <span style = {{ textDecoration : item.isDone ? 'line-through' : 'none'}}>{item.description}</span>  }
                            </div>
                            
                            <div style = {{display : 'flex' , justifyContent : 'space-between'}}>
                                <button className = 'delete' onClick = {() => remove(item.id)}>Remove</button>
                                <button className = 'update' onClick = {() => edit({id : item.id, desc : item.toggle ? description.current.value : item.description})}>Edit</button>
                            </div>
                            
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);