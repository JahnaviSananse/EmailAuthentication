import {LOGINDATA} from './Login.types';
import firebase from '../firebase.utils';

// export const LoginStart = () => ({
//   type: LOGINDATA.LoginStart,
// });
// export const LoginSuccess = data => ({
//   type: LOGINDATA.LoginSuccess,
//   payload: data,
// });
// export const LoginStop = () => ({
//   type: LOGINDATA.LoginStop,
// });

// export const dataFetch = (data) => {
//   return dispatch => {
//     dispatch(LoginStart());
//     firebase
//     .auth()
//     .createUserWithEmailAndPassword(data.email, data.pass)
//     .then(response => {
//       console.log(response);
//       dispatch(LoginSuccess(response))
//       navigation.navigate('LoginNext');
//     })
//     .catch(error => {
//       dispatch(LoginStop(error))
//     });

//       };
//   };

export const dataFetch = data => dispatch => {
  console.log(
    '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<...........helllo..........',
  );
  returnToDispatch(dispatch, LOGINDATA.LOGIN_START);
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.pass)
    .then(response => {
      console.log(response);

      setTimeout(() => {
        returnToDispatch(dispatch, LOGINDATA.LOGIN_SUCCESS, response);
      }, 5000);
      data.navigation.navigate('LoginNext');
    })
    .catch(error => {
      returnToDispatch(dispatch, LOGINDATA.LOGIN_STOP, error.message);
    });
};

returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
