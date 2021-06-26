import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function NotifyLabel({ open, closeNotify, label = '' }) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
            }}
            open={open}
            autoHideDuration={3000}
            onClose={closeNotify}
            message={label}
            action={
                <React.Fragment>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={closeNotify}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    );
}

NotifyLabel.propTypes = {
    open: PropTypes.bool,
    closeNotify: PropTypes.func,
    label: PropTypes.string
};

export default NotifyLabel;
