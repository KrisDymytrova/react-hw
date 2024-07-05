import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material';

const DeleteDialog = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Are you sure you want to delete this item?</DialogTitle>
            <DialogActions>
                <Button onClick={onConfirm} color="primary">
                    Yes
                </Button>
                <Button onClick={onClose} color="primary">
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DeleteDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
};

export default DeleteDialog;