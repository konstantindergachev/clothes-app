import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import { TYPES } from '../auth-types';

export const userLoading = () => {
  return {
    type: TYPES.USER_LOADING,
  };
};

const getSnapshotFromUserAuth = async (dispatch, user, username) => {
  const userRef = await createUserProfileDocument(user, username);
  userRef.onSnapshot((snapShot) => {
    dispatch(setUser({ id: snapShot.id, ...snapShot.data() }));
  });
};

export const setUser = (user) => (dispatch) => {
  try {
    dispatch(userLoading());
    dispatch({
      type: TYPES.SET_USER,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: TYPES.USER_ERRORS,
      payload: err,
    });
  }
};

export const loginUserWithGoogle = () => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.LOGIN_USER_WITH_GOOGLE,
    });

    const { user } = await signInWithGoogle();
    getSnapshotFromUserAuth(dispatch, user, {
      displayName: user.displayName,
    });
  } catch (err) {
    dispatch({
      type: TYPES.USER_ERRORS,
      payload: err,
    });
  }
};

export const registerUser = (email, password, displayName) => async (
  dispatch
) => {
  try {
    dispatch({
      type: TYPES.REGISTER_USER,
    });

    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    getSnapshotFromUserAuth(dispatch, user, { displayName });
  } catch (err) {
    dispatch({
      type: TYPES.USER_ERRORS,
      payload: err,
    });
  }
};

export const loginUser = (email, password, displayName) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.LOGIN_USER,
    });

    const { user } = await auth.signInWithEmailAndPassword(email, password);
    getSnapshotFromUserAuth(dispatch, user, { displayName });
  } catch (err) {
    dispatch({
      type: TYPES.USER_ERRORS,
      payload: err.message,
    });
  }
};
export const logoutUser = () => async (dispatch) => {
  await auth.signOut();
  try {
    dispatch({
      type: TYPES.LOGOUT_USER,
      payload: null,
    });
  } catch (err) {
    dispatch({
      type: TYPES.USER_ERRORS,
      payload: err,
    });
  }
};

export const reloadUser = () => async (dispatch) => {
  try {
    dispatch({ type: TYPES.RELOAD_USER });
    return auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        getSnapshotFromUserAuth(dispatch, userAuth);
      }

      dispatch(setUser(null));
    });
  } catch (err) {
    dispatch({
      type: TYPES.USER_ERRORS,
      payload: err,
    });
  }
};
