import {LOGINDATA, SIGNIN_DATA} from './Login.types';

const INITIAL_DATA = {
  authUser: [],
  error: [],
  isLoading: false,
};

const LoginReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case LOGINDATA.LOGIN_START:
    case SIGNIN_DATA.SIGNIN_START:
      console.log('>>>>>>>>>>>>>>>>>>', state.isLoading);

      return {
        ...state,
        isLoading: true,
      };
    case LOGINDATA.LOGIN_SUCCESS:
      return {
        ...state,

        isLoading: false,
      };
    case SIGNIN_DATA.SIGNIN_SUCCESS:
      return {
        ...state,
        authUser: [action.payload],
        isLoading: false,
      };

    case LOGINDATA.LOGIN_STOP:
    case SIGNIN_DATA.SIGNIN_STOP:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default LoginReducer;
