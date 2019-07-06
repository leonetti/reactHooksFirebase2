import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { amber, green } from '@material-ui/core/colors';

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 20,
  }
});

const iconFromType = (type) => {
  switch (type) {
    case 'success':
      return CheckCircleIcon;
    case 'error':
      return ErrorIcon;
    case 'warning':
      return WarningIcon;
    default:
        break;
  }
}

function SnackbarWrapper(props) {
  const { classes, type, message, isOpen, handleClose } = props;
  const Icon = iconFromType(type);
  return (
    <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={isOpen}
        autoHideDuration={6000}
      >
        <SnackbarContent
          className={classes[type]}
          message={
            <span className={classes.message}>
              <Icon className={classes.icon} />
              {message}
            </span>
          }
          action={[
            <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
              <CloseIcon className={classes.closeIcon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
  )
}

export default withStyles(styles)(SnackbarWrapper);
