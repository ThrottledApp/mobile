import React from 'react'
import { View, Text } from 'react-native'

export default class Settings extends React.Component {
  render () {
    console.log('rendinger stettings')
    return (
      <View style={{flex: 1}}>
        <Text
          style={{color: 'white'}}
          >
          Settings
        </Text>
      </View>
    )
  }
}
