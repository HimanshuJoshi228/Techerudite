import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {COLORS} from '../assets/colors';

const Card = ({data}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{
          uri: data?.event_profile_img,
        }}
        resizeMode={'cover'}
        style={styles.img}
      />
      <View style={styles.textContainer}>
        <View style={{justifyContent: 'flex-start'}}>
          <Text numberOfLines={1} style={styles.heading}>
            {data?.event_name}
          </Text>
          <Text style={styles.date}>
            {data?.readable_to_date !== '' ? (
              <>
                {data?.readable_from_date} - {data?.readable_to_date}
              </>
            ) : (
              <>{data?.readable_from_date}</>
            )}
          </Text>
          <Text style={styles.price}>
            {data?.event_price_from === 0 && data?.event_price_to === 0 ? (
              <>€{data?.event_price_from}</>
            ) : (
              <>
                €{data?.event_price_from} - €{data?.event_price_to}
              </>
            )}
          </Text>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {data?.keywords !== [] &&
              data?.keywords?.map((data, key) => {
                return (
                  <Text key={key} style={styles.tagText}>
                    {data}
                  </Text>
                );
              })}
          </View>
        </View>
        <View style={styles.rightContainer}>
          <AntDesign name="arrowright" color={COLORS.black} size={20} />
          <Text style={styles.countryName}>
            {data?.city}, {data?.country}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
              marginBottom: 10,
            }}>
            <Feather
              name="share"
              color={COLORS.black}
              size={23}
              style={{marginRight: 13}}
            />
            <AntDesign name="hearto" color={COLORS.black} size={23} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  img: {
    width: 90,
    height: 90,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 8,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.black2,
    lineHeight: 19,
    marginBottom: 5,
    marginTop: 10,
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.date,
    lineHeight: 13,
    marginBottom: 5,
  },
  price: {
    fontSize: 11,
    fontWeight: '500',
    color: COLORS.placeholder,
    lineHeight: 12,
    marginBottom: 10,
  },
  tagText: {
    backgroundColor: COLORS.background2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 25,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.black2,
    lineHeight: 13,
    marginRight: 10,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  countryName: {
    fontSize: 11,
    fontWeight: '400',
    color: COLORS.placeholder,
    lineHeight: 14,
    marginRight: 9,
  },
});
