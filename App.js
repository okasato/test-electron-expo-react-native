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
      <Text>References:</Text>
      <Text>- Blog: https://dev.to/evanbacon/making-desktop-apps-with-electron-react-native-and-expo-5e36</Text>
      <Text>- Example repo: https://github.com/expo/examples/tree/master/with-electron</Text>
      <Text>- Docs: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-electron.md#building-your-project</Text>
      <Text>- Others: https://www.npmjs.com/package/@expo/electron-adapter</Text>
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
