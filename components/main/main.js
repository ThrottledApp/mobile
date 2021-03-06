import React from 'react'
import { View, Text, Button } from 'react-native'
import { NetworkInfo } from 'react-native-network-info'
import SpeedTest from '../../lib/speedtest'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state =  {
      ip: '',
      ssid: '',
      org: '',
      speed: '~'
    }
  }

  _getNetworkInformation = async () => {
    console.log('running')
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
  }

  _getSpeed = async () => {
    this.setState({
      speed: '~'
    })
    let speed = await SpeedTest.getSpeed()
    console.log(speed)
    this.setState({
      speed
    })
  }

  async componentWillMount () {
    this._getNetworkInformation()
  }

  render () {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{color: 'white', fontSize: 80}}
          >
            {this.state.speed}
        </Text>
        <Text
          style={{color: 'white', fontSize: 20}}
          >
            AVERAGE SPEED
        </Text>
        <Button
          onPress={this._getSpeed}
          title={'GET SPEED'}
        />
      </View>
    )
  }
}
