# react-css-parallax

> A css-based parallax background to be used with react

[![NPM](https://img.shields.io/npm/v/react-css-parallax.svg)](https://www.npmjs.com/package/react-css-parallax) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-css-parallax
```

## Usage

```jsx
import React, { Component } from 'react'

import Parallax from 'react-css-parallax'

class Example extends Component {
  render () {
    return (
      <Parallax src="https://kevinrodriguez.io/kevinbackground.jpg" alt="A nice keyboard" height="100vh" />
      <Parallax src="https://kevinrodriguez.io/kevinbackground.jpg" alt="A nice keyboard" height="100vh" fixed {/*Disables the parallax effect*/} />
    )
  }
}
```

## License

MIT © [kevinrodriguez-io](https://github.com/kevinrodriguez-io)
