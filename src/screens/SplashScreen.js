import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../assets/colors';

const SplashScreen = ({navigation}) => {
  const timeoutHelper = action => {
    const timer = setTimeout(() => {
      action();
    }, 1500);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    timeoutHelper(() => {
      navigation.replace('LoginScreen');
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://techerudite.com/wp-content/uploads/2019/08/site-logo.png',
          }}
          resizeMode={'contain'}
          style={styles.image}
        />
        <Text style={styles.text}>WELCOME TO{'\n'}TECHERUDITE</Text>
      </View>

      <StatusBar backgroundColor={COLORS.black} barStyle="default" />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
  },
  text: {
    fontSize: 20,
    color: COLORS.white,
    marginTop: 20,
    fontWeight: '700',
    letterSpacing: 4,
  },
});
