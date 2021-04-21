import {FEED} from './feed.types';

// Redux-Thunk
export const feed = share => dispatch => {
  returnToDispatch(dispatch, FEED.FEED_START);
  setTimeout(() => {
    axios.post('https://emailauth-526e8-default-rtdb.firebaseio.com/user.json');
    returnToDispatch(dispatch, FEED.FEED_SUCCESS, share);
  }, 3000);
  returnToDispatch(dispatch, FEED.FEED_STOP);
};

returnToDispatch = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload,
  });
};
