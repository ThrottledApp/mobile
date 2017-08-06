import React from 'react'
import { View, FlatList, Text, Dimensions, PanResponder } from 'react-native'
import { Colors } from '../lib/common'
import Settings from './settings/settings'
import Main from './main/main'
import Analytics from './analytics/analytics'

const { width, height } = Dimensions.get('window')

export default class Layout extends React.Component {
  // componentDidMount () {
  //   this.layout.scrollToIndex({index: 2})
  // }

  getItemLayout = (data, index) => (
    { length: width, offset: width * index, index }
  )

  _renderItem = (object) => {
    const { item } = object
    const style = {
      flex: 1,
      width: width,
      height: height,
    }

    return (
      <View
        style={style}>
        {item.component}
      </View>
    )
  }

  render () {
    const data = [
      {
        key: 'settings',
        component: <Settings />
      },
      {
        key: 'main',
        component: <Main />
      },
      {
        key: 'analytics',
        component: <Analytics />
      }
    ]
    return (
      <View style={{flex:  1, justifyContent: 'center'}}>
        <FlatList
          ref={(ref) => { this.layout = ref }}
          data={data}
          initialScrollIndex={1}
          renderItem={this._renderItem}
          getItemLayout={this.getItemLayout}
          horizontal
          scrollEventThrottle={80}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          directionalLockEnabled
          bounces={false}
        />
      </View>
    )
  }
}
