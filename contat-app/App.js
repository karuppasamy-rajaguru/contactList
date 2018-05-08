import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ContactList from './src/components/ContactList';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      <ContactList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
