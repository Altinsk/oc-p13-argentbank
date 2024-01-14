import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    id: null,
    firstName: null,
    lastName: null,
    token: null,
    error: null
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState(),
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.error = null;

      if (action.payload.rememberMe) {
        localStorage.setItem("token", action.payload.token);
      } else {
        localStorage.removeItem("token");
      }
    },
    loginFailure(state, action) {
      state.token = null;
      state.error = action.payload;
      localStorage.removeItem("token");
    },
    setProfile(state, action) {
      state.error = null;
      state.id = action.payload.body.id;
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
    },
    logout(state, action) {
      localStorage.removeItem("token");
      return initialState();
    }
  }
});

export const {
  loginSuccess,
  loginFailure,
  setProfile,
  logout
} = userSlice.actions;

export default userSlice.reducer;
