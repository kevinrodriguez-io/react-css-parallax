import React from 'react'
import PropTypes from 'prop-types'

/**
 * @typedef ParallaxProps
 * @property {React.ReactNode} [children] - Children elements
 * @property {string} src Image source url
 * @property {string} height Container height
 * @property {string} [alt] Alt description for the image
 * @property {boolean} [fixed] Disables the parallax effect, useful for touch-screens
 */

/**
 * Creates a parallax container, if alt is present it also
 * creates an img tag with the given src and alt for screen readers.
 * @param {ParallaxProps} props - Container properties
 */
const Parallax = ({ children, src, height, alt, fixed, ...passProps }) => {
  const containerStyles = {
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: fixed ? 'scroll' : 'fixed',
    backgroundImage: `url(${src})`,
    minHeight: height
  }
  return (
    <div style={containerStyles} {...passProps}>
      {alt && (<img {...{ src, alt }} style={{display: 'none'}} />) }
      { children }
    </div>
  )
}

Parallax.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fixed: PropTypes.bool
}

Parallax.defaultProps = {
  height: '100vh',
  alt: 'Parallax Image',
  fixed: false
}

export default Parallax
