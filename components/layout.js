import React from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default class Layout extends React.Component {

  _renderItem = (item) => {
    return (
      <View style={{flex: 1, width: width, height: height, backgroundColor: item.item.backgroundColor}}>
        <Text>
          {item.item.key}
        </Text>
      </View>
    )
  }

  render () {
    return (
      <View style={{flex:  1, justifyContent: 'center'}}>
        <FlatList
          data={[{key: 'a', backgroundColor: 'red'}, {key: 'b', backgroundColor: 'blue'}]}
          renderItem={this._renderItem}
          horizontal
        />
      </View>
    )
  }
}
