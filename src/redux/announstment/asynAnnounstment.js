import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstants } from "../../config/axiosInstance";

export const getUser = createAsyncThunk(
	"auth/getUser",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axiosInstants.get(
				"/api/v1/announcement/get-announcement-default"
			);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
