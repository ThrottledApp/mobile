import React from 'react'
import { View, Text } from 'react-native'

export default class Main extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: 'red'}}>
        <Text
          style={{color: 'white'}}
          >
          Main
        </Text>
      </View>
    )
  }
}
