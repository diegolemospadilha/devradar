import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

function Profile({ navigation }) {
  const githubUsername = navigation.getParam("github_username");
  return (
    <WebView
      source={{ uri: `https:/github.com/${githubUsername}` }}
      style={{ marginTop: 20 }}
    />
  );
}

export default Profile;
