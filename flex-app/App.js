import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlexBox } from './src/components/FlexBox';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlexBox/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
