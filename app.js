import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { NetworkInfo } from 'react-native-network-info'
import SpeedTest from 'react-native-speed-test/'
import Layout from './components/layout'
import { Colors } from './lib/common'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state =  {
      ip: '',
      ssid: '',
      org: '',
      speed: ''
    }
  }

  _getNetworkInformation = async () => {
    NetworkInfo.getSSID(ssid => {
      this.setState({ssid})
    })
    let req = await fetch('https://ipinfo.io/json')
    let json = await req.json()
    let { ip, org } = json
    this.setState({
      ip,
      org
    })

    let speed = await SpeedTest.getSpeed()
    this.setState({
      speed
    })
  }

  async componentWillMount () {
    this._getNetworkInformation()
  }

  render() {
    return (
      <View style={styles.container}>
        <Layout style={{flex: 1}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
