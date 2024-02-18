import React, { Children } from 'react'
import PropTypes from 'prop-types'

const Layout = {(children)} => {
  return (
    <div>
        <Sidebar/>
        {children}</div>
  )
}

Layout.propTypes = {}

export default Layout