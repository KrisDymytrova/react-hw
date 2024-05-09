import { Component } from 'react';
import PropTypes from 'prop-types';

class LogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: []
        };
    }

    handlePlus = () => {
        const { log } = this.state;
        const newLog = [log.length ? log[0] + 1 : 1, ...log];
        this.setState({ log: newLog });
    };

    handleMinus = () => {
        const { log } = this.state;
        const newLog = [log.length ? log[0] - 1 : -1, ...log];
        this.setState({ log: newLog });
    };

    handleDelete = (index) => {
        const { log } = this.state;
        const newLog = [...log];
        newLog.splice(index, 1);
        this.setState({ log: newLog });
    };

    render() {
        const { log } = this.state;

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handlePlus}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleMinus}>-</button>
                </div>
                <div className="list-group">
                    {log.map((value, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={() => this.handleDelete(index)}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

LogList.propTypes = {
    log: PropTypes.array
};

export default LogList;
