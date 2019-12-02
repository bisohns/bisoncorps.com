import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
import Language from "@material-ui/icons/Language"
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded"
import DeveloperModeOutlinedIcon from "@material-ui/icons/DeveloperModeOutlined"
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle"
// core components
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import InfoArea from "components/InfoArea/InfoArea"

const ProductSection = ({ classes }) => (
  <div className={classes.section}>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <h2 className={classes.title}>We create Product</h2>
        <h5 className={classes.description} />
      </GridItem>
    </GridContainer>
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Artificial Intelligence"
            description="We apply Cutting Edge Technologies in Machine Learning to suit your very need"
            icon={EmojiObjectsRoundedIcon}
            iconColor="info"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Web Development"
            description="With Technologies like React, Django and Golang, we build web applications which scale"
            icon={Language}
            iconColor="success"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Mobile Development"
            description="Using React-Native, we create cross-platform mobile applications"
            icon={DeveloperModeOutlinedIcon}
            iconColor="danger"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  </div>
)

export default withStyles(productStyle)(ProductSection)
