import React from 'react'
import PropTypes from 'prop-types'

import styles from './parallax.css'

/**
 * @typedef ParallaxProps
 * @property {React.ReactNode} [children] - Children elements
 * @property {string} src Image source url
 * @property {string} height Container height
 * @property {string} [alt] Alt description for the image
 * @property {boolean} [fixed] Disables the parallax effect, useful for touch-screens
 */

/**
 * Creates a parallax container
 * @param {ParallaxProps} props - Container properties
 */
const Parallax = ({ children, src, height, alt, fixed }) => {
  const elementStyle = {
    backgroundImage: `url(${src})`,
    minHeight: height
  }
  return (
    <div
      style={elementStyle}
      className={`${styles.parallax} ${fixed && styles.fixed}`}>
      <img {...{ src, alt }} style={{display: 'none'}} />
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

export default Parallax
