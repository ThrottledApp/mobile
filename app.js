import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Layout from './components/layout'
import { Colors } from './lib/common'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Layout style={{flex: 1}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
})
