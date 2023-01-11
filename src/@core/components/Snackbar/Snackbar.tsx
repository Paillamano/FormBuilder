import React, { useState } from 'react';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { CustomAlertProps } from '../../interfaces/interfaces';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' { ...props }/>;
})

const CustomAlert = ({ severity, message }: CustomAlertProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }
    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default CustomAlert;