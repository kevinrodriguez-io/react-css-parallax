# react-css-parallax

> A css-based parallax background to be used with react

[![NPM](https://img.shields.io/npm/v/react-css-parallax.svg)](https://www.npmjs.com/package/react-css-parallax) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
https://kevinrodriguez-io.github.io/react-css-parallax

## Install

```bash
npm install --save react-css-parallax
```
## Features

- [x] Relies on `backgroundAttachment`
- [x] Supports `fixed` to disable the parallax effect
- [x] Simple, customizable api
- [x] Adds underlying, hidden img tag when alt is present
- [x] Supports passProps

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
