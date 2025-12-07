import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';
const App = () => {
  return <Routes />;
};

export default App;

const styles = StyleSheet.create({});
