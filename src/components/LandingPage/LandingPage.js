import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import Layout from "components/Layout"
import { GridItem, GridContainer } from "components/Grid"
import Button from "components/CustomButtons"
import Parallax from "components/Parallax"
import landingPageStyle from "assets/jss/material-kit-react/views/landingPage"
import BackgroundImage from "assets/img/landing-bg.jpg"

// Sections for this page
import ProductSection from "./Sections/ProductSection"
import TeamSection from "./Sections/TeamSection"
import WorkSection from "./Sections/WorkSection"

const LandingPage = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query LandingPageQuery {
        site {
          siteMetadata {
            tagline
            github
            about
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Parallax filter image={BackgroundImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>
                  {data.site.siteMetadata.tagline}
                </h1>
                <h4>{data.site.siteMetadata.about}</h4>
                <br />
                <Button
                  href={data.site.siteMetadata.github}
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  See Works
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
      </Layout>
    )}
  />
)

export default withStyles(landingPageStyle)(LandingPage)
