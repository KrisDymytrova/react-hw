import { Component } from 'react';
import cn from 'classnames';

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened,
        };
    }

    toggleVisibility = () => {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    }

    render() {
        const { text } = this.props;
        const { opened } = this.state;

        const collapseClasses = cn('collapse', { 'show': opened });

        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={opened}
                       onClick={this.toggleVisibility}>
                        Link with href
                    </a>
                </p>
                <div className={collapseClasses}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse;
