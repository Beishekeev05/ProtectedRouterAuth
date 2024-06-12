import { createSlice } from "@reduxjs/toolkit";
import { authSignIn, authSignUp } from "./authThunk";
const initialState = {
	auth: false,
	token: "",
	isLoading: false,
	error: "",
};
export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, { payload }) {
			state.auth = true;
			state.token = payload.token;
		},
		logout(state) {
			localStorage.removeItem("TOKEN");
			state.auth = false;
			state.token = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authSignUp.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(authSignUp.fulfilled, (state, { payload }) => {
				state.auth = true;
				state.token = payload.token;
			})
			.addCase(authSignUp.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(authSignIn.pending, (state) => {
				state.isLoading = true;
			})
			//
			.addCase(authSignIn.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.auth = true;
				state.token = payload.token;
			})
			.addCase(authSignIn.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});
export const { login, logout } = authSlice.actions;
