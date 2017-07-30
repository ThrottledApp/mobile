import React from 'react'
import { View, FlatList, Text, Dimensions } from 'react-native'
import { Colors } from '../lib/common'

const { width, height } = Dimensions.get('window')

export default class Layout extends React.Component {

  _renderItem = (object) => {
    const { item } = object
    const style = {
      flex: 1,
      width: width,
      height: height,
      backgroundColor: Colors.primary
    }

    return (
      <View style={style}>
        <Text
          style= {{top: 20, color: 'white'}}
          >
          {item.key}
        </Text>
      </View>
    )
  }

  render () {
    const data = [
      {
        page: 'settings',
        component: ''
      },
      {
        page: 'main',
        component: ''
      },
      {
        page: 'analytics',
        component: ''
      }
    ]
    return (
      <View style={{flex:  1, justifyContent: 'center'}}>
        <FlatList
          data={[{key: 'a', backgroundColor: 'red'}, {key: 'b', backgroundColor: 'blue'}]}
          renderItem={this._renderItem}
          horizontal
          pagingEnabled
        />
      </View>
    )
  }
}
