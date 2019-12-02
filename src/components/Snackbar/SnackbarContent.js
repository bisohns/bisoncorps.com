import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Snack from "@material-ui/core/SnackbarContent"
import IconButton from "@material-ui/core/IconButton"
import Icon from "@material-ui/core/Icon"
// @material-ui/icons
import Close from "@material-ui/icons/Close"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ErrorIcon from "@material-ui/icons/Error"
import InfoIcon from "@material-ui/icons/Info"
import WarningIcon from "@material-ui/icons/Warning"

import snackbarContentStyle from "assets/jss/material-kit-react/components/snackbarContentStyle"

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  danger: ErrorIcon,
  info: InfoIcon,
}

class SnackbarContent extends React.Component {
  constructor(props) {
    super(props)
    this.closeAlert = this.closeAlert.bind(this)
    const { classes, message, color, close, icon, open } = props
    let action = []
    if (close !== undefined) {
      action = [
        <IconButton
          className={classes.iconButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.closeAlert}
        >
          <Close className={classes.close} />
        </IconButton>,
      ]
    }

    let snackIcon = null
    switch (typeof icon) {
      case "function":
        snackIcon = <props.icon className={classes.icon} />
        break
      case "string":
        const SelectedIcon = variantIcon[icon]
        snackIcon = <SelectedIcon className={classes.icon} />
        break
      default:
        snackIcon = null
        break
    }

    this.state = {
      alert: (
        <Snack
          message={
            <div>
              {snackIcon}
              {message}
              {close !== undefined ? action : null}
            </div>
          }
          open={open}
          classes={{
            root: `${classes.root} ${classes[color]}`,
            message: `${classes.message} ${classes.container}`,
          }}
        />
      ),
    }
  }

  closeAlert() {
    this.setState({ alert: null })
  }

  render() {
    return this.state.alert
  }
}

SnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

export default withStyles(snackbarContentStyle)(SnackbarContent)
