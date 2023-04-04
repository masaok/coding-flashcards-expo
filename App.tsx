import { StyleSheet, StatusBar } from 'react-native'

import { WebView } from 'react-native-webview'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  webview: {
    paddingTop: StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
  },
})

const URL = 'https://coding-flashcards-web.vercel.app'

const App = () => {
  return <WebView style={styles.webview} source={{ uri: URL }} />
}

export default App
