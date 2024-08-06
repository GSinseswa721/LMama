import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authActions';

interface AuthState {
  loading: boolean;
  userInfo: any;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
