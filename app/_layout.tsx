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
        scalesPageToFit={false}
        injectedJavaScript={`
          const meta = document.createElement('meta');
          meta.name = 'viewport';
          meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          document.getElementsByTagName('head')[0].appendChild(meta);

          const style = document.createElement('style');
          style.innerHTML = \`
            * {
              user-select: none;
              -webkit-user-select: none;
              outline: none;
              -webkit-tap-highlight-color: transparent;
            }
          \`;
          document.head.appendChild(style);

          // 禁用手势缩放
          document.addEventListener('gesturestart', e => e.preventDefault());
          document.addEventListener('gesturechange', e => e.preventDefault());
          document.addEventListener('gestureend', e => e.preventDefault());

          document.addEventListener('touchmove', e => {
            if (e.touches.length > 1) {
              e.preventDefault();
            }
          }, { passive: false });

          true;
        `}
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
