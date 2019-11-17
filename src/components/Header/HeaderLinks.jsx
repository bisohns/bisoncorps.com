/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import { Apps } from "@material-ui/icons";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
// react components for routing our app without refresh
import { Link } from "gatsby";
import React from "react";
// React icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.navLink}>
          About
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github-id"
          title="Checkout out GitHub repos"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/bisoncorps"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <FaGithub />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="Linkedin-Link"
          title="Follow us on facebook"
          placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <FaLinkedin />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);