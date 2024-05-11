import { Component } from 'react';
import PropTypes from 'prop-types';
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

class Card extends Component {
    static Body = CardBody;
    static Title = CardTitle;
    static Text = CardText;
    render() {
        const { children } = this.props;
        return (
            <div className="card">
                {children}
            </div>
        );
    }
}

Card.propTypes = {
    children: PropTypes.node.isRequired
};

export default Card;