/*eslint-disable*/
import { List, ListItem, withStyles } from "@material-ui/core";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "gatsby";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import React from "react";



function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.bisoncorps.com/"
                className={classes.block}
                target="_blank"
              >
                Bisoncorps
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/about" className={classes.block}>
                About us
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/works" className={classes.block}>
                Our Works
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          Bisoncorps
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
