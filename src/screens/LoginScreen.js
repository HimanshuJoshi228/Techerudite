import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Taking Care of the error data
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Password Visible or not
  const [visible, setVisible] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(true);

  const login = async () => {
    setIsLoading(true);
    fetch('https://techeruditedev.xyz/projects/plie-api/public/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        navigation.navigate('HomeScreen', {response: response});
      })
      .catch(error => {
        setIsLoading(false);
        console.error(error);
      });
  };

  const validate = () => {
    if (
      (!email || email === '' || email.length === 0) &&
      (!password || password === '' || password.length === 0)
    ) {
      setPasswordError('Please fill in the required field');
      setEmailError('Please fill in the required field');
      return;
    }

    if (!password || password === '' || password.length === 0) {
      setPasswordError('Please fill in the required field');
      return;
    }

    if (!email || email === '' || email.length === 0) {
      setEmailError('Please fill in the required field');
      return;
    }

    // For non empty email validation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
      setEmailError('Please enter valid Email Id');
      return;
    }

    console.log(email);
    console.log(password);

    login();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Image
          source={{
            uri: 'https://techerudite.com/wp-content/uploads/2017/02/home-about-3.jpg',
          }}
          resizeMode={'stretch'}
          style={styles.image}
        />
        <View style={styles.loginContainer}>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              placeholder="email@email.com"
              returnKeyType="next"
              onChangeText={text => {
                setEmail(text);
              }}
              style={[styles.shadowProps, styles.inputField]}
            />
            {/* Error Text, will only show up when there is an error */}
            {emailError !== '' && (
              <View style={{marginTop: 2}}>
                <Text style={styles.errorText}>{emailError}</Text>
              </View>
            )}
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Password</Text>
            <View style={[styles.shadowProps, styles.inputField]}>
              <TextInput
                style={{width: '90%'}}
                secureTextEntry={visiblePassword}
                placeholder="Password"
                returnKeyType="done"
                onChangeText={text => {
                  setPassword(text);
                }}
              />
              {!visible ? (
                <TouchableOpacity
                  onPress={() => {
                    setVisiblePassword(false);
                    setVisible(true);
                  }}>
                  <Ionicons
                    name="md-eye-off-outline"
                    color={COLORS.placeholder}
                    size={20}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setVisiblePassword(true);
                    setVisible(false);
                  }}>
                  <Ionicons
                    name="md-eye-outline"
                    color={COLORS.placeholder}
                    size={20}
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* Error Text, will only show up when there is an error */}
            {passwordError !== '' && (
              <View style={{marginTop: 2}}>
                <Text style={styles.errorText}>{passwordError}</Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => console.log('Burgiir')}
            style={styles.forgetPassword}>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => validate()}
              style={styles.signInBtn}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.signUpText}>Not a member? </Text>
              <Text
                onPress={() => console.log('Burgiir')}
                style={[styles.signUpText, {textDecorationLine: 'underline'}]}>
                Sign Up Here
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.line} />
            <View style={styles.lineTextContainer}>
              <Text style={{backgroundColor: COLORS.white}}>
                or Sign In with:
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={[styles.otherLoginBtn, styles.shadowProps]}>
              <Ionicons name="logo-google" color={COLORS.black} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.otherLoginBtn, styles.shadowProps]}>
              <Ionicons name="logo-apple" color={COLORS.black} size={20} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.otherLoginBtn, styles.shadowProps]}>
              <Ionicons name="logo-facebook" color={COLORS.blue} size={44} />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={
            emailError !== '' || passwordError !== ''
              ? [styles.guestText, {marginBottom: 20}]
              : styles.guestText
          }>
          Enter as Guest
        </Text>
      </ScrollView>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 330,
  },
  loginContainer: {
    marginVertical: 35,
    marginHorizontal: 46,
  },
  emailContainer: {
    marginBottom: 15,
  },
  emailText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: COLORS.text1,
  },
  shadowProps: {
    ...Platform.select({
      android: {
        elevation: 10,
        shadowColor: COLORS.shadowProps,
      },
      ios: {
        shadowColor: COLORS.shadowProps,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
    }),
  },
  inputField: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    marginTop: 4,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: COLORS.red,
  },
  forgetPassword: {
    marginTop: -7,
    alignSelf: 'flex-end',
  },
  btnContainer: {
    alignSelf: 'flex-end',
    marginTop: 27,
    marginBottom: 60,
  },
  signInBtn: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.signInBtn,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: COLORS.white,
  },
  signUpText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: COLORS.black,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.text2,
  },
  lineTextContainer: {
    position: 'relative',
    left: '35%',
    top: -13,
    width: '35%',
    paddingHorizontal: 3,
    alignItems: 'center',
  },
  otherLoginBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginRight: 16,
    borderRadius: 4,
  },
  guestText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: COLORS.placeholder,
    textAlign: 'right',
    marginRight: 12,
  },
});
