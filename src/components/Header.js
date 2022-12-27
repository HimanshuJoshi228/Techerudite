import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/colors';

const Header = ({title, subtitle}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 19,
    paddingVertical: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 32,
    color: COLORS.black,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: COLORS.placeholder,
  },
});
