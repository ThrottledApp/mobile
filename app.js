import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { NetworkInfo } from 'react-native-network-info'
import SpeedTest from 'react-native-speed-test/'

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
        <Text style={styles.welcome}>
          {this.state.ip}
        </Text>
        <Text style={styles.instructions}>
          {this.state.ssid}
        </Text>
        <Text style={styles.instructions}>
          {this.state.org}
        </Text>
        <Text style={styles.instructions}>
          {this.state.speed}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
