import { Component } from 'react';
import PropTypes from 'prop-types';

class ModalHeader extends Component {
    render() {
        const { toggle, children } = this.props;

        return (
            <div className="modal-header">
                <div className="modal-title">{children}</div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle}></button>
            </div>
        );
    }
}

ModalHeader.propTypes = {
    toggle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default ModalHeader;