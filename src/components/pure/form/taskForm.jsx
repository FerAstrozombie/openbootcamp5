import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

// eslint-disable-next-line react/prop-types
const TaskForm = ({ add, length }) => {

    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color: "blue",
        fontWeight: "bold",
        fontSize: "1rem"
    }

    const urgentStyle = {
        color: "yellowgreen",
        fontWeight: "bold",
        fontSize: "1rem"
    }

    const blokingStyle = {
        color: "tomato",
        fontWeight: "bold",
        fontSize: "1rem"
    }

    const buttonStyle = {
        fontSize: "1rem"
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg' style={{fontSize: "1rem"}} required autoFocus placeholder='Task name'/>
                <input ref={descriptionRef} id='inputDescription' type="text" className='form-control form-control-lg' style={{fontSize: "1rem"}} required placeholder='Task description' />
                <select
                ref={levelRef} 
                defaultValue={LEVELS.NORMAL} 
                id="selectLevel"
                className='form-control form-control-lg'
                style={{fontSize: "1rem"}}
                >
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENT}>
                        Urgente
                    </option>
                    <option style={blokingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg' style={buttonStyle}>
                    {length > 0 ? "Add new task" : "Crate your first task"}
                </button>
            </div>
        </form>
    );
}

TaskForm.protoType = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
