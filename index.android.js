/* @flow */

import React from 'react'
import { AppRegistry } from 'react-native'
import App from './app'
export default class Throttled extends React.Component {
  render () {
    return <App />
  }
}

AppRegistry.registerComponent('Throttled', () => Throttled)
