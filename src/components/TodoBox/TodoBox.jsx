import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Item from '../Item';

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const changeInputHandler = (e) => {
        setInputValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const newTask = {
                id: uniqueId(),
                text: inputValue
            };
            setTasks([newTask, ...tasks]);
            setInputValue('');
        }
    };

    const removeHandler = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex" onSubmit={submitHandler}>
                    <div className="me-3">
                        <input
                            type="text"
                            value={inputValue}
                            required
                            className="form-control"
                            placeholder="I am going..."
                            onChange={changeInputHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
            <div>
                {tasks.map(task => (
                    <Item key={task.id} task={task.text} onRemove={() => removeHandler(task.id)} />
                ))}
            </div>
        </div>
    );
};

TodoBox.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ),
    inputValue: PropTypes.string
};

export default TodoBox;
