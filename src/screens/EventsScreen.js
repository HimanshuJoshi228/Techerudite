import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../assets/colors';
import Header from '../components/Header';
import Card from '../components/Card';

const EventsScreen = ({route}) => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://techeruditedev.xyz/projects/plie-api/public/api/events-listing',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: route?.params?.response?.data?.token,
        },
        body: JSON.stringify({}),
      },
    )
      .then(response => response.json())
      .then(response => {
        setData(response?.data?.events);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  }, [route?.params?.response?.data?.token]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title={'Hello Renzo!'} subtitle={'Are you ready to dance?'} />
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={{paddingBottom: 40}}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              {data?.map((item, key) => {
                return (
                  <View key={key} style={styles.container}>
                    <Card data={item} />
                  </View>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
