import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
    case 'signin':
      return { ...state, errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: ''};
    case 'load_app':
      return { ...state, isLoading: false};
    case 'signout':
      return { ...state, token: null};
    default:
      return state;
  }
};

const loadApp = dispatch => () => {
  dispatch({ type: 'load_app'});
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message'});
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token });
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signup', payload: response.data.token });

    } catch(err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
    }
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

    } catch(err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign in'});
    }
  }
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin, loadApp },
  { token: null, errorMessage: '', isLoading: true}
);