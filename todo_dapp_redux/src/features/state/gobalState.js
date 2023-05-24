import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  ether: null,
  darkMode: false,
};
try {
  initialState.darkMode = parseInt(window.localStorage.getItem("darkmode")) || false;
} catch (error) { }

export const globlaState = createSlice({
  name: 'globalState',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggelDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setEther: (state, action) => {
      state.ether = action.payload;
    },
    setExtra: (state, action) => {
      state[action.payload.key] = action.payload?.val;
    },
  },
});

export const selectDarkMode = (state) => state.global.darkMode;
export const selectEther = (state) => state.global.ether;
export const selectExtra = (state) => {
  const { ether, darkMode, ...extra } = state.global;
  return extra;
};

export const { toggelDarkMode, setEther, setExtra } = globlaState.actions;
export default globlaState.reducer;
