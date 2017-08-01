import React from 'react'
import { View, FlatList, Text, Dimensions, PanResponder } from 'react-native'
import { Colors } from '../lib/common'
import Settings from './settings/settings'
import Main from './main/main'
import Analytics from './analytics/analytics'

const { width, height } = Dimensions.get('window')

export default class Layout extends React.Component {
  componentWillMount () {
    this._panResponder = PanResponder.create({
       // Ask to be the responder:
       onStartShouldSetPanResponder: (evt, gestureState) => false,
       onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
       onMoveShouldSetPanResponder: (evt, gestureState) => false,
       onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

       onPanResponderGrant: (evt, gestureState) => {
         // The gesture has started. Show visual feedback so the user knows
         // what is happening!
         console.log('yoooo')
         // gestureState.d{x,y} will be set to zero now
       },
       onPanResponderMove: (evt, gestureState) => {
         // The most recent move distance is gestureState.move{X,Y}
console.log('yoooo')
         // The accumulated gesture distance since becoming responder is
         // gestureState.d{x,y}
       },
       onPanResponderTerminationRequest: (evt, gestureState) => true,
       onPanResponderRelease: (evt, gestureState) => {
         // The user has released all touches while this view is the
         // responder. This typically means a gesture has succeeded
         console.log('yoooo')
       },
       onPanResponderTerminate: (evt, gestureState) => {
         // Another component has become the responder, so this gesture
         // should be cancelled
         console.log('yoooo')
       },
       onShouldBlockNativeResponder: (evt, gestureState) => {
         console.log('yoooo')
         // Returns whether this component should block native components from becoming the JS
         // responder. Returns true by default. Is currently only supported on android.
         return true;
       },
     });
  }
  componentDidMount () {
    this.layout.scrollToIndex({index: 1})
  }

  getItemLayout = (data, index) => (
    { length: width, offset: width * index, index }
  )

  _renderItem = (object) => {
    const { item } = object
    const style = {
      flex: 1,
      width: width,
      height: height,
      paddingLeft: 2,
      paddingRight: 2,
      top: 25
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
          renderItem={this._renderItem}
          getItemLayout={this.getItemLayout}
          horizontal
          scrollEventThrottle={32}
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
