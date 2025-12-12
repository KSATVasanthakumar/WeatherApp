import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../styles/colors';
import fontFamil from '../constants/fontFamil';
import imageFile from '../constants/imageFile';

const TodayWeatherComponents = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.txtTitle}>Today's Weather</Text>
      <View style={styles.containView}>
        <View style={styles.viewSeparate}>
          <Text style={styles.txtTiming}>{'09:00 AM'}</Text>
          <Image source={imageFile.sunwithcloud} style={styles.imgToday} />
          <Text style={{ ...styles.txtTiming }}>{'28º'}</Text>
        </View>
        <View style={styles.viewSeparate}>
          <Text style={styles.txtTiming}>{'09:00 AM'}</Text>
          <Image source={imageFile.sun} style={styles.imgToday} />
          <Text style={{ ...styles.txtTiming }}>{'30º'}</Text>
        </View>
        <View style={{ ...styles.viewSeparate, borderRightWidth: 0 }}>
          <Text style={styles.txtTiming}>{'09:00 AM'}</Text>
          <Image source={imageFile.sun} style={styles.imgToday} />
          <Text style={{ ...styles.txtTiming }}>{'33º'}</Text>
        </View>
      </View>
    </View>
  );
};

export default TodayWeatherComponents;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.CADET_BLUE,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
  },
  txtTitle: {
    fontFamily: fontFamil.regular,
    color: colors.FOG_GRAY,
    fontSize: 14,
  },
  containView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignSelf: 'center',
  },
  txtTiming: {
    color: colors.FOG_GRAY,
    fontFamily: fontFamil.regular,
    fontSize: 12,
  },
  viewSeparate: {
    borderRightWidth: 0.5,
    borderColor: colors.DIM_GRAY,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgToday: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
