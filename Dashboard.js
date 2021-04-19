import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Logout} from './Redux/Login.actions';

const Dashboard = props => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'white',
        //justifyContent: 'center',
      }}>
      <Text style={{fontSize: 30, alignSelf: 'center', marginTop: '50%'}}>
        Welcome, You are SignedIn !!!
      </Text>
      <TouchableOpacity
        onPress={() => {
          // props.navigation.navigate('signup_nav');
          props.Logout(props.navigation);
        }}>
        <Text style={styles.loginText}> LOG OUT </Text>
      </TouchableOpacity>
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
    borderColor: 'black',
    borderWidth: 2,
  },
  loanText: {
    fontSize: 40,
    marginTop: 15,
  },
  headView: {
    backgroundColor: 'white',
    height: 90,
    flexDirection: 'row',
  },
  img: {
    top: 10,
    marginLeft: 65,
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
    backgroundColor: 'green',
    borderRadius: 10,
  },
  loginGuest: {
    width: '40%',
    marginTop: 10,
    marginLeft: 90,
    left: 40,
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
  },
  loginText: {
    height: 50,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    padding: 12,
    marginLeft: '35%',
    marginTop: '10%',
    width: '30%',
    backgroundColor: 'green',
    borderRadius: 10,
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
  signupView: {
    height: 60,
    marginTop: 35,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 30,
    padding: 5,
  },
});
// const mapStateToProps = (state) => {
//   logoutSuccess : state.dataFetch.isLoading;
// }
export default connect(null, {
  Logout,
})(Dashboard);
