import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../announstment/asynAnnounstment";
const initialState = {
	data: [],
	isLoading: false,
	error: null,
};
export const announstmentSlice = createSlice({
	name: "announstment",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUser.fulfilled, (state, { payload }) => {
				state.data = payload;
				state.isLoading = false;
			})
			.addCase(getUser.rejected, (state, { payload }) => {
				state.error = payload;
				state.isLoading = false;
			});
	},
});
