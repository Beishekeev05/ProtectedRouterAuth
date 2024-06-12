import React from "react";
import { authSignUp } from "../redux/auth/authThunk";
import { Box, TextField, Button, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { INPUT_ARRAYS } from "../utils/helpers/arrayInputs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";

const SignUp = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.auth);
	const schema = yup.object().shape({
		name: yup.string().required("Заполните это поле"),
		number: yup
			.string()
			.required("Заполните это поле")
			.matches(
				/^\+996\d{9}$/,
				"Введите правильный номер телефона, начинающийся с '+996'"
			),
		email: yup
			.string()
			.required("Заполните это поле")
			.email("Введите правильный email"),
		password: yup
			.string()
			.required("Заполните это поле")
			.min(6, "Минимум 6 символов")
			.max(16, "Максимум 16 символов"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSubmit = (data) => {
		dispatch(authSignUp({ data, reset }));
	};

	return (
		<>
			{!isLoading ? (
				<BoxMui>
					<MuiForm onSubmit={handleSubmit(onSubmit)} component="form">
						{INPUT_ARRAYS?.map((item) => (
							<TextField
								fullWidth
								key={item.name}
								name={item.name}
								label={item.label}
								type={item.type}
								{...register(item.name)}
								helperText={errors[item.name]?.message}
								error={!!errors[item.name]}
							/>
						))}
						<Button type="submit" variant="contained">
							Sign Up
						</Button>
						<Button type="button" variant="outlined">
							<NavLink style={{ textDecoration: "none" }} to="/sign-in">
								Войти
							</NavLink>
						</Button>
					</MuiForm>
				</BoxMui>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default SignUp;

const BoxMui = styled(Box)(() => {
	return {
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
});

const MuiForm = styled(Box)(() => {
	return {
		width: "400px",
		minHeight: "300px",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		border: "1px solid black",
		padding: 20,
		borderRadius: 10,
	};
});
