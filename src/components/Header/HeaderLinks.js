// core components
import React from "react"
import { Link } from "gatsby"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// @material-ui/icons
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle"

function HeaderLinks({ classes }) {
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/works" className={classes.navLink}>
          Our Works
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="#contact" className={classes.navLink}>
          Contact Us
        </Link>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
