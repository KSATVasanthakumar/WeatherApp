import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>App</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
