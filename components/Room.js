import React from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';

export default function Room() {
  return(
  <View>
    <WebView
        source={{
          uri: 'https://github.com/facebook/react-native'
        }}
        style={{ marginTop: 20, width: '100%',flex: 1 }}
      />
  </View>)
}