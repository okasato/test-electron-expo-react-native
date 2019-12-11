import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Donn Gold!</Text>
      <Text>Expo has expo-adapter, which enables us to import React-Native code into Electron.</Text>
      <Text>This packege seems to have all tools to run Electron with Expo.</Text>
      <Text>electron-webpack.js plays a key role to give us this magic.</Text>
      <Text>In electron/main/index.js, browserWindow.loadURL method allows us to use hot-reloading.</Text>
      <Text>yarn expo-electron start</Text>
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
