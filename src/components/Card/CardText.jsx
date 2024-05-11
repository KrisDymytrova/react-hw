import { Component } from 'react';
import PropTypes from 'prop-types';

class CardText extends Component {
    render() {
        const { children } = this.props;
        return (
            <p className="card-text">
                {children}
            </p>
        );
    }
}

CardText.propTypes = {
    children: PropTypes.node.isRequired
};

export default CardText;