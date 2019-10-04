import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

export default function RepoView({ navigation }) {
  const repository = navigation.getParam('repository');
  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}

RepoView.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});

RepoView.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
