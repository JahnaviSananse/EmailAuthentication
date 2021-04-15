import {LOGINDATA} from './Login.types';

const INITIAL_DATA = {
  data: [],
  error: [],
  isLoading: false,
};

const LoginReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case LOGINDATA.LOGIN_START:
      console.log('>>>>>>>>>>>>>>>>>>', state.isLoading);

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
      return state;
  }
};
export default LoginReducer;
