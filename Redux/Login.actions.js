import {LOGINDATA} from './Login.types';

export const LoginStart = () => ({
  type: LOGINDATA.LoginStart,
});
export const LoginSuccess = data => ({
  type: LOGINDATA.LoginSuccess,
  payload: data,
});
export const LoginStop = () => ({
  type: LOGINDATA.LoginStop,
});
