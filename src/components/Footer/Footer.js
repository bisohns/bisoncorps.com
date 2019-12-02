// nodejs library to set properties for components
import React from "react"
import PropTypes from "prop-types"
import { List, ListItem, withStyles } from "@material-ui/core"
import { StaticQuery, graphql, Link } from "gatsby"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite"
import { FaGithub } from "react-icons/fa"
import footerStyle from "assets/jss/material-kit-react/components/footerStyle"
import Button from "components/CustomButtons"

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  })
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          site {
            siteMetadata {
              siteUrl
              github
            }
          }
        }
      `}
      render={data => (
        <footer className={footerClasses}>
          <div className={classes.container}>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Link to="/" className={classes.block}>
                    Bisoncorps
                  </Link>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href={data.site.siteMetadata.github}
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Works
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Button
                    href={data.site.siteMetadata.github}
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <FaGithub />
                  </Button>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by Bisoncorps
            </div>
          </div>
        </footer>
      )}
    />
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
