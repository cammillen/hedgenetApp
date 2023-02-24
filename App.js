import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fontstyles from './src/styles/Fonts';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={fontstyles.text}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});