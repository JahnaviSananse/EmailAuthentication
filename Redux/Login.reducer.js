import {LOGINDATA} from './Login.types';

const INITIAL_DATA = {
  data: [],
  error: undefined,
  isLoading: false,
};

const LoginReducer = (state = INITIAL_DATA, action) => {
  switch (action) {
    case LOGINDATA.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGINDATA.LOGIN_SUCCESS:
      return {
        ...state,
        item: [action.payload],
        isLoading: false,
      };
    case LOGINDATA.LOGIN_STOP:
      return {
        ...state,
        isLoading: false,
      };

    default:
      state;
  }
};
export default LoginReducer;
