import { Dispatch } from 'redux';
import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await axios.post('http://localhost:6000/api/v1/users/signin', { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data, // Assuming the response contains user data and a token
    });
  }catch (error) {
  const err = error as { message: string; response?: { data?: { message?: string } } };
  dispatch({
    type: LOGIN_FAILURE,
    payload: err.response?.data?.message || err.message,
  });
}
};
