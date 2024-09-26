import React from 'react'
import { useMycontext } from './context/MainProvider';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Notify = () => {
    const { notifySave, setNotifySave } = useMycontext();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotifySave(false);
    };

    return (
        <Snackbar
            open={notifySave}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Saved"
            action={<IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>}
        />
    )
}

export default Notify