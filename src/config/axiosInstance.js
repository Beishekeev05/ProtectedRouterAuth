import axios from "axios";
import { store } from "../redux";

export const axiosInstants = axios.create({
	baseURL: "http://18.212.69.110/",
});

axios.interceptors.request.use(
	function (config) {
		const updateConfig = { ...config };
		const { token } = store.getState().auth;
		if (token) {
			updateConfig.headers.Authorization = `Bearer${token}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);
