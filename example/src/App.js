import React, { Fragment } from 'react'
import Parallax from 'react-css-parallax'

import bridge from './images/bridge.jpg';
import window from './images/window.jpg';

export default () => {
  return (
    <Fragment>
      <Parallax src={window} alt="A window" height="50vh" fixed />
      <Parallax src={bridge} alt="A bridge" height="100vh" />
      <Parallax src={window} alt="A window" height="50vh" fixed />
    </Fragment>
  );
};