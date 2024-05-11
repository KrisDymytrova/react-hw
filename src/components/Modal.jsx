import { Component } from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

class Modal extends Component {
    static Header = ModalHeader;
    static Body = ModalBody;
    static Footer = ModalFooter;

    render() {
        const { isOpen, children } = this.props;

        return (
            <div className={`modal ${isOpen ? 'fade show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;