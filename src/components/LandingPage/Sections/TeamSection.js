import React from "react"
import { StaticQuery, graphql } from "gatsby"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import Avatar from "@material-ui/core/Avatar"

// core components
import { GridContainer, GridItem } from "components/Grid"
import Button from "components/CustomButtons"
import Card, { CardBody, CardFooter } from "components/Card"

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle"

import team1 from "assets/img/faces/avatar.jpg"
import team2 from "assets/img/faces/christian.jpg"
import team3 from "assets/img/faces/kendall.jpg"

const TeamSection = ({ classes }) => {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  )
  return (
    <StaticQuery
      query={graphql`
        query TeamQuery {
          site {
            siteMetadata {
              members {
                name
                role
                bio
                github
                twitter
                linkedin
              }
            }
          }
        }
      `}
      render={data => (
        <div className={classes.section}>
          <h2 className={classes.title}>Here is our team</h2>
          <div>
            <GridContainer>
              {data.site.siteMetadata.members.map(member => (
                <GridItem xs={12} sm={12} md={4} key={member.github}>
                  <Card plain>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={6}
                      className={classes.itemGrid}
                    >
                      {member.avatar ? (
                        <img
                          src={member.profile}
                          alt="..."
                          className={imageClasses}
                        />
                      ) : (
                        <Avatar className={(imageClasses, classes.bigAvatar)}>
                          {member.name
                            .split(" ")
                            .map(n => n[0].toUpperCase())
                            .join("")}
                        </Avatar>
                      )}
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {member.name}
                      <br />
                      <small className={classes.smallTitle}>
                        {member.role}
                      </small>
                    </h4>
                    <CardBody>
                      <p className={classes.description}>{member.bio}</p>
                    </CardBody>
                    <CardFooter className={classes.justifyCenter}>
                      {member.twitter && (
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                          href={member.twitter}
                        >
                          <FaTwitter />
                        </Button>
                      )}
                      {member.github && (
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                          href={member.github}
                        >
                          <FaGithub />
                        </Button>
                      )}
                      {member.linkedin && (
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                          href={member.linkedin}
                        >
                          <FaLinkedin />
                        </Button>
                      )}
                      {member.facebook && (
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                          href={member.facebook}
                        >
                          <FaFacebook />
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      )}
    />
  )
}

export default withStyles(teamStyle)(TeamSection)
