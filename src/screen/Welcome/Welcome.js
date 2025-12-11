import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/WrapperContainer';
import imageFile from '../../constants/imageFile';
import colors from '../../styles/colors';
import fontFamil from '../../constants/fontFamil';
const Welcome = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainViewStyles}>
        <Image source={imageFile.welcome} />
        <Text style={styles.appTile}>V-WeatherApp</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity>
          <Image source={imageFile.next} style={styles.btnImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  mainViewStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  appTile: {
    fontSize: 40,
    color: colors.MIDNIGHT_BLUE,
    marginTop: 20,
    fontFamily: fontFamil.regular,
  },
  btnView: {
    flex: 0.2,
    alignItems: 'center',
  },
  btnImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
});
