import Footer from "components/Footer"
import Header, { HeaderLinks } from "components/Header"
import React from "react"
import "typeface-roboto"
import "typeface-roboto-slab"
import "typeface-amita"

const Layout = ({ children, ...rest }) => {
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
