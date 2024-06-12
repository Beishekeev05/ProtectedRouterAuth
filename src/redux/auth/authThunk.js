import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstants } from "../../config/axiosInstance";

export const authSignUp = createAsyncThunk(
	"auth/authSignUp",
	async ({ data: param, reset }, { rejectWithValue }) => {
		try {
			const { data } = await axiosInstants.post("/api/v1/auth/sign-up", param);
			localStorage.setItem("TOKEN", JSON.stringify(data.token));
			reset();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const authSignIn = createAsyncThunk(
	"auth/authSignIn",
	async ({ value, reset }, { rejectWithValue }) => {
		try {
			const { data } = await axiosInstants.post("/api/v1/auth/sign-in", value);
			localStorage.setItem("TOKEN", JSON.stringify(data.token));
			reset();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

