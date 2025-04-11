import { SafeAreaView, StyleSheet, Platform, StatusBar as RNStatusBar, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      RNStatusBar.setTranslucent(true);
      RNStatusBar.setBackgroundColor('transparent');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <WebView
        androidHardwareAccelerationDisabled={false} 
        source={{ uri: 'https://Zhang-fulin.github.io/Earth-Explore' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0, // 去除顶部间距
  },
  webview: {
    flex: 1,
    backgroundColor: 'black'
  },
});
