import { Component } from 'react';
import PropTypes from 'prop-types';

class ModalFooter extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="modal-footer">{children}</div>
        );
    }
}

ModalFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalFooter;