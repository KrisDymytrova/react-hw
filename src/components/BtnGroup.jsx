import { Component } from 'react';
import cn from 'classnames';

class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: null,
        };
    }

    handleClick = (btn) => {
        this.setState({ activeBtn: btn });
    }

    render() {
        const { activeBtn } = this.state;

        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={cn('btn btn-secondary left', { 'active': activeBtn === 'left' })}
                    onClick={() => this.handleClick('left')}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={cn('btn btn-secondary right', { 'active': activeBtn === 'right' })}
                    onClick={() => this.handleClick('right')}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;