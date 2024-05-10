import { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Item from '../Item';

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: ''
        };
    }
    changeInputHandler = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { inputValue, tasks } = this.state;
        if (inputValue.trim() !== '') {
            const newTask = {
                id: uniqueId(),
                text: inputValue
            };
            this.setState({ tasks: [newTask, ...tasks], inputValue: '' });
        }
    };

    removeHandler = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }));
    };

    render() {
        const { tasks, inputValue } = this.state;

        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.submitHandler}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={inputValue}
                                required
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.changeInputHandler}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {tasks.map(task => (
                        <Item key={task.id} task={task.text} onRemove={() => this.removeHandler(task.id)} />
                    ))}
                </div>
            </div>
        );
    }
}

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