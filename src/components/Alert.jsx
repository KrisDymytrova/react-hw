import React from 'react';
import classNames from 'classnames';

class Alert extends React.Component {
    render() {
        const { text, type } = this.props;
        const alertClass = classNames('alert', `alert-${type}`);

        return (
            <div className={alertClass} role="alert">
                {text}
            </div>
        );
    }
}

Alert.defaultProps = {
    text: '',
    type: '',
};

export default Alert;