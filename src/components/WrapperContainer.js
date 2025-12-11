import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../styles/colors';

const WrapperContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.DARK_BLUE}
      />
      <View style={styles.viewStyles}>{children}</View>
    </SafeAreaView>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.MIDNIGHT_BLUE,
  },
  viewStyles: {
    flex: 1,
    backgroundColor: colors.MIDNIGHT_BLUE,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});
