import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { announstmentSlice } from "./announstment/announstmentSlice";

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[announstmentSlice.name]: announstmentSlice.reducer,
	},
});
