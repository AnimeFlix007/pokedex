import { User } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  user: User | null;
};

const loggedInUser: () => User | null = () => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem("pokedex_user_info");
    return item ? JSON.parse(item) : null;
  } else {
    return null;
  }
};

const initialState: initialState = {
  user: loggedInUser(),
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("pokedex_user_info", JSON.stringify(action.payload))
    },
    logOut: (state, action) => {
      state.user = null;
      localStorage.removeItem("pokedex_user_info")
    },
  },
  extraReducers: {},
});

export const { setUser, logOut } = userSlice.actions;