import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/colors';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>Search Screen</Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.black,
  },
});
