import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamil from '../../constants/fontFamil';
import colors from '../../styles/colors';
import imageFile from '../../constants/imageFile';
import { useNavigation } from '@react-navigation/native';

const Details = ({ route }) => {
  const navigation = useNavigation();
  const inComingData = route.params;
  console.log('incomingdata', inComingData);

  const airConditionsData = [
    {
      id: 1,
      name: 'UV INDEX',
      value: '3',
    },
    {
      id: 2,
      name: 'WIND',
      value: '0.2Km/h',
    },
    {
      id: 3,
      name: 'HUMIDITY',
      value: '52%',
    },
    {
      id: 4,
      name: 'VISIBILITY',
      value: '10 km',
    },
    {
      id: 5,
      name: 'FEELS LIKE',
      value: '30º',
    },
    {
      id: 6,
      name: 'CHANCE OF RAIN',
      value: '0%',
    },
    {
      id: 7,
      name: 'PRESSURE',
      value: '1008 hPa',
    },
    {
      id: 8,
      name: 'SUNSET',
      value: '18:10',
    },
  ];
  return (
    <WrapperContainer>
      <View style={styles.headerView}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={imageFile.back} style={styles.backImg} />
        </Pressable>
        <Text style={styles.headingTxt}>{'Air Conditions'}</Text>
        <View style={{ width: '10%' }}></View>
      </View>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Text style={styles.headerTitle}>{'KARAIKUDI'}</Text>
          <Text style={styles.citySubName}>{'CHANCE OF RAIN: 0%'}</Text>
          <Image source={imageFile.sun} style={styles.imageClimate} />
          <Text style={styles.cityDegree}>{'31 º'}</Text>
          <FlatList
            scrollEnabled={false}
            data={airConditionsData}
            numColumns={2}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }} />;
            }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: '46%',
                    backgroundColor: colors.CADET_BLUE,
                    paddingHorizontal: 4,
                    paddingVertical: 10,
                    borderRadius: 10,
                    marginTop: 20,
                  }}
                >
                  <Text numberOfLines={1} style={styles.renderText}>
                    {item.name}
                  </Text>

                  <Text
                    numberOfLines={1}
                    style={{ ...styles.renderText, color: colors.CARBON_GRAY }}
                  >
                    {item.value}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Details;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? 5 : 8,
    marginTop: 20,
  },
  backImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  headingTxt: {
    fontFamily: fontFamil.regular,
    color: colors.FOG_GRAY,
  },
  headerTitle: {
    fontFamily: fontFamil.regular,
    color: colors.FOG_GRAY,
    fontSize: 30,
  },
  citySubName: {
    color: colors.GRAY,
    fontFamily: fontFamil.regular,
    fontSize: 12,
    marginTop: 20,
  },
  imageClimate: {
    height: 60,
    width: 60,
    marginTop: 20,
    resizeMode: 'contain',
  },
  cityDegree: {
    fontSize: 30,
    color: colors.WHITE,
    fontFamily: fontFamil.regular,
    marginTop: 20,
  },
  renderText: {
    fontFamily: fontFamil.regular,
    fontSize: 15,
    color: colors.FOG_GRAY,
  },
});
