import UserService from "../../services/UserService";
import { loginSuccess, loginFailure, setProfile } from "../slices/user";

/** @returns {import("redux").Action} */
export const handleLogin = (email, password, rememberMe) => {
  // @ts-ignore
  return async dispatch => {
    try {
      const loginData = await UserService.login(email, password);

      switch (loginData.status) {
        case 200:
          dispatch(
            loginSuccess({
              token: loginData.body.token,
              rememberMe: rememberMe
            })
          );
          const userData = await UserService.getUserData(loginData.body.token);
          dispatch(setProfile(userData));
          break;
        case 400:
        case 500:
        default:
          dispatch(loginFailure(loginData.message));
          break;
      }
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};

export const handleAutoLogin = () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userData = await UserService.getUserData(token);
          dispatch(
            loginSuccess({
              token: token,
              rememberMe: true
            })
          );
          dispatch(setProfile(userData));
        } catch (error) {
          throw new Error(error);
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const handleUpdateProfile = (token, newFirstname, newLastName) => {
  return async dispatch => {
    try {
      const updateData = await UserService.updateUserData(
        token,
        newFirstname,
        newLastName
      );

      if (updateData.status === 200) {
        dispatch(setProfile(updateData));
      }
    } catch (error) {
      throw new Error(error);
    }
  };
};
