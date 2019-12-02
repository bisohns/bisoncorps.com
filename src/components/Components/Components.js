// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// sections for this page
import componentsStyle from "assets/jss/material-kit-react/views/components"
// nodejs library that concatenates classes
import classNames from "classnames"
import Button from "components/CustomButtons"
import { GridContainer, GridItem } from "components/Grid"
// @material-ui/icons
// core components
import Layout from "components/Layout"
import Parallax from "components/Parallax"
// react components for routing our app without refresh
import { Link } from "gatsby"
import React from "react"
import SectionBasics from "./Sections/SectionBasics"
import SectionCarousel from "./Sections/SectionCarousel"
import SectionCompletedExamples from "./Sections/SectionCompletedExamples"
import SectionDownload from "./Sections/SectionDownload"
import SectionExamples from "./Sections/SectionExamples"
import SectionJavascript from "./Sections/SectionJavascript"
import SectionLogin from "./Sections/SectionLogin"
import SectionNavbars from "./Sections/SectionNavbars"
import SectionNotifications from "./Sections/SectionNotifications"
import SectionPills from "./Sections/SectionPills"
import SectionTabs from "./Sections/SectionTabs"
import SectionTypography from "./Sections/SectionTypography"

const Components = ({ classes }) => {
    return (
      <Layout>
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Material Kit React.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to="/login-page" className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
      </Layout>
    )
}

export default withStyles(componentsStyle)(Components)
