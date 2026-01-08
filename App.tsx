import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VNTBao Xin Chao 👋</Text>
      <Text style={styles.sub}>React Native is running!</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6eaeb9ff',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f40808ff',
  },
  sub: {
    marginTop: 10,
    fontSize: 16,
    color: '#555555',
  },
});
