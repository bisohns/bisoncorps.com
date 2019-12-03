import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import useForm from "react-hook-form"
import emailjs from "emailjs-com"

// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import CustomInput from "components/CustomInput/CustomInput"
import Button from "components/CustomButtons"
import SnackbarContent from "components/Snackbar/SnackbarContent"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle"

const WorkSection = ({ classes }) => {
  const { register, handleSubmit, setValue } = useForm()
  const [processing, setProcessing] = useState({ state: false, data: {} })
  const [open, setOpen] = useState({
    state: false,
    message: "",
    status: "info",
  })

  const onSubmit = data => {
    setProcessing({ state: true, data })
  }

  const handleChange = e => {
    setValue(e.target.name, e.target.value)
  }

  useEffect(() => {
    register({ name: "name" })
    register({ name: "email" })
    register({ name: "message" })
    if (processing.state === true) {
      const { name, email, message } = processing.data
      let status = null
      let snackbarMessage = null

      emailjs
        .send(
          "gmail",
          "template_YT3QcPc7",
          { user_name: name, user_email: email, message },
          "user_TnMrzVZ0Sbf2VtvhQGTUM"
        )
        .then(
          response => {
            status = "success"
            snackbarMessage =
              "your message was sent successfully. We will get back to you soon"
          },
          error => {
            snackbarMessage =
              "your message was not sent successfully. Try again later"
            status = "danger"
          }
        )
        .finally(() => {
          // batch state updates to prevent double rerenders
          ReactDOM.unstable_batchedUpdates(() => {
            setOpen({ ...open, message: snackbarMessage, status, state: true })
            setProcessing({ ...processing, state: false })
          })
        })
    }
  }, [open, processing, register])

  return (
    <div className={classes.section} id="contact">
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will get back to you in a couple of hours.
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  inputProps={{
                    name: "name",
                    onChange: handleChange,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  inputProps={{
                    name: "email",
                    onChange: handleChange,
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  name: "message",
                  onChange: handleChange,
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button
                    type="submit"
                    disabled={processing.state}
                    color="primary"
                  >
                    Send Message
                  </Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
      {open.state && (
        <SnackbarContent
          message={<span>{open.message}</span>}
          close
          color={open.status}
          icon={open.status}
        />
      )}
    </div>
  )
}

export default withStyles(workStyle)(WorkSection)
