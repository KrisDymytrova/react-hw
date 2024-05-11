import { Component } from 'react';
import PropTypes from 'prop-types';

class CardTitle extends Component {
    render() {
        const { children } = this.props;
        return (
            <h4 className="card-title">
                {children}
            </h4>
        );
    }
}

CardTitle.propTypes = {
    children: PropTypes.node.isRequired
};

export default CardTitle;