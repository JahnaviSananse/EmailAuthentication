import {LOGINDATA, SIGNIN_DATA, LOGOUT_DATA} from './Login.types';

const INITIAL_DATA = {
  authUser: [],
  error: [],
  isLoading: false,
};

const LoginReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case LOGINDATA.LOGIN_START:
    case SIGNIN_DATA.SIGNIN_START:
    case LOGOUT_DATA.LOGOUT_START:
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

    // two condition on one case.....
    case LOGINDATA.LOGIN_STOP:
    case SIGNIN_DATA.SIGNIN_STOP:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT_DATA.LOGOUT_SUCCESS:
      return {
        ...state,
        authUser: [],
        isLoading: false,
      };

    default:
      return state;
  }
};
export default LoginReducer;
