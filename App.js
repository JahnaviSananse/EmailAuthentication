import react from 'react';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [fname, setFname] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const validateForgot = () => {
    let isValidate = false;
    let mailFormat = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    let message = '';
    if (fname === '') {
      message = 'please enter your full name!';
    } else if (email === '') {
      message = 'please enter your email address!';
    } else if (!mailFormat.test(email)) {
      isValidate = false;
      message = 'Please enter valid email address.';
    } else if (pass === '') {
      message = 'please enter your password!';
    } else if (pass.length < 5) {
      isValidate = false;
      message = 'Please add at least 5 charachter.';
    } else {
      return true;
    }

    if (isValidate === false) {
      alert(message);
    }
  };

  const onFocusChange = () => {
    setIsFocus(true);
  };

  const renderLogin = () => {
    return (
      <View>
        <Text style={styles.headText}> Full Name : </Text>

        <TextInput
          onFocus={onFocusChange}
          onChangeText={text => setFname(text)}
          value={fname}
          placeholder={' Enter Your Name '}
          style={{
            ...styles.textinput,
            borderColor: isFocus ? '#bd7669' : 'black',
          }}
        />

        <Text style={styles.headText}> Email Address : </Text>

        <TextInput
          onFocus={onFocusChange}
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder={' abc@gmail.com '}
          style={{
            ...styles.textinput,
            borderColor: isFocus ? '#bd7669' : 'black',
          }}
        />

        <Text style={styles.headText}> Password : </Text>

        <TextInput
          onFocus={onFocusChange}
          onChangeText={text => setPass(text)}
          value={pass}
          placeholder={' Enter Password Here '}
          style={{
            ...styles.textinput,
            borderColor: isFocus ? '#bd7669' : 'black',
          }}
        />
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              alert('Forgot Password ?');
            }}>
            <Text style={styles.forgotPass}> Forgot Password? </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() => {
              console.log('navigation', navigation);
              if (validateForgot()) {
                navigation.navigate('Profile.js');
              }
            }}>
            <Text style={styles.loginText}> LOG IN </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <View>
        <View style={styles.headView}>
          <Image style={styles.img} source={require('./virgo.png')} />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.loginFormText}>LOG-IN FORM</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'white',
        // justifyContent: 'center',
      }}>
      {renderTabs()}
      {renderLogin()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,

    borderWidth: 2,
  },

  headView: {
    backgroundColor: 'white',
    height: 90,
    flexDirection: 'row',
  },
  img: {
    top: 10,
    marginLeft: '30%',
  },
  headText: {
    marginTop: 10,
    marginLeft: 9,
    fontSize: 18,
    marginBottom: 5,
  },
  loginButton: {
    width: '40%',
    marginTop: 20,
    marginLeft: 90,
    left: 40,
    backgroundColor: '#bd7669',
    borderRadius: 10,
  },
  loginGuest: {
    width: '40%',
    marginTop: 10,
    marginLeft: 90,
    left: 40,
    backgroundColor: 'white',
    borderColor: '#bd7669',
    borderWidth: 2,
    borderRadius: 10,
  },
  loginText: {
    height: 50,
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    padding: 8,
    left: 28,
  },
  guestText: {
    height: 50,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    padding: 10,
    left: 30,
  },
  forgotPass: {
    color: 'red',
    marginRight: 30,
    marginTop: 10,
  },
  loginView: {
    height: 60,
    top: '3%',
    marginTop: 35,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  loginFormText: {
    fontSize: 28,
    padding: 5,
  },
});
export default App;
