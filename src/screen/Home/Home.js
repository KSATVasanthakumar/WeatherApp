import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/WrapperContainer';
import colors from '../../styles/colors';
import fontFamil from '../../constants/fontFamil';
import imageFile from '../../constants/imageFile';
import TodayWeatherComponents from '../../components/TodayWeatherComponents';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const weekWeather = [
    { day: 'Monday', weather: 'Sunny', temp: '34/20' },
    { day: 'Tuesday', weather: 'Raining', temp: '34/20' },
    { day: 'Wednesday', weather: 'Sunny', temp: '33/20' },
    { day: 'Thursday', weather: 'Cloudy', temp: '35/20' },
    { day: 'Friday', weather: 'Cloudy', temp: '30/20' },
    { day: 'Saturday', weather: 'Raining', temp: '37/20' },
    { day: 'Sunday', weather: 'Sunny', temp: '29/20' },
  ];
  const airData = [
    {
      id: 1,
      weather: 'Real Feel',
      imge: imageFile.reel,
      temp: '30',
    },
    {
      id: 2,
      weather: 'Wind',
      imge: imageFile.wind,
      temp: '0%',
    },
    {
      id: 3,
      weather: 'Chance of rain',
      imge: imageFile.drop,
      temp: '0.2 Km/h',
    },
    {
      id: 4,
      weather: 'UV',
      imge: imageFile.uv,
      temp: '3',
    },
  ];
  return (
    <WrapperContainer>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.mainView}>
          <Text style={styles.cityName}>{'KARAIKUDI'}</Text>
          <Text style={styles.citySubName}>{'CHANCE OF RAIN: 0%'}</Text>
          <Image source={imageFile.sun} style={styles.imageClimate} />
          <Text style={styles.cityDegree}>{'31 º'}</Text>
        </View>
        <View style={styles.todayContainer}>
          <TodayWeatherComponents />
          <FlatList
            scrollEnabled={false}
            nestedScrollEnabled={true}
            style={styles.cardUistyle}
            data={weekWeather}
            ListHeaderComponent={() => {
              return (
                <View style={{ marginBottom: 13 }}>
                  <Text style={styles.fltHeading}>Days Forecast</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 12, color: colors.ALMOND }} />;
            }}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    borderBottomWidth: item.day == 'Sunday' ? 0 : 0.6,
                    paddingBottom: 12,
                    bottomColor: colors.FLORAL_WHITE,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ ...styles.weekName, width: '15%' }}>
                    {item.day?.substring(0, 3)}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: 70,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Image
                      source={imageFile.sun}
                      style={{ height: 20, width: 20 }}
                    />
                    <Text style={styles.weekName}>{item.weather}</Text>
                  </View>

                  <Text style={styles.weekName}>{item.temp}</Text>
                </View>
              );
            }}
          />
          <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            style={styles.cardUistyle}
            data={airData}
            ListHeaderComponent={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.cardText}>Air Condition</Text>
                  <Pressable
                    style={styles.seeMoreBtn}
                    onPress={() => navigation.navigate('Detail', { airData })}
                  >
                    <Text style={styles.seeMoreTxt}>See More</Text>
                  </Pressable>
                </View>
              );
            }}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
            renderItem={({ item }) => {
              return (
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Image
                      source={item.imge}
                      style={{ width: 30, height: 30, marginRight: 5 }}
                    />

                    <Text style={styles.cardText}>{item.weather}</Text>
                  </View>
                  <Text style={{ ...styles.cardText, textAlign: 'center' }}>
                    {item.temp}
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

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  cityName: {
    color: colors.WHITE,
    fontFamily: fontFamil.regular,
    fontSize: 30,
    marginTop: 20,
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
  todayContainer: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  fltHeading: {
    fontSize: 15,
    fontFamily: fontFamil.regular,
    color: colors.FOG_GRAY,
    marginTop: 10,
  },
  weekName: {
    color: colors.FOG_GRAY,
    fontSize: 12.5,
    fontFamily: fontFamil.regular,
  },
  cardUistyle: {
    marginTop: 20,
    backgroundColor: colors.CADET_BLUE,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cardText: {
    color: colors.FOG_GRAY,
    fontFamily: fontFamil.regular,
    fontSize: 12,
  },
  seeMoreBtn: {
    backgroundColor: colors.ALMOND,
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  seeMoreTxt: {
    color: colors.JET_BLACK,
    fontFamily: fontFamil.regular,
    fontSize: 12,
  },
});
