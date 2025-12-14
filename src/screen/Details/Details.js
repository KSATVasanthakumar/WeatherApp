import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamil from '../../constants/fontFamil';
import colors from '../../styles/colors';

const Details = () => {
  return (
    <WrapperContainer>
      <View style={styles.headerView}>
        <Pressable>
          <Image />
        </Pressable>
      </View>
    </WrapperContainer>
  );
};

export default Details;

const styles = StyleSheet.create({
  headerTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
