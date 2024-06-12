import { Box, Button, TextField, styled } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../redux/auth/authThunk";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";

const SignIn = () => {
	const method = useForm();
	const { error, isLoading } = useSelector((state) => state.auth);
	const errors = error.message;

	const dispatch = useDispatch();
	const submitHnalder = (value) => {
		2;
		console.log(value, "value");
		const reset = method.reset;
		dispatch(authSignIn({ value, reset }));
	};

	return (
		<>
			{!isLoading ? (
				<FormProvider {...method}>
					<BoxMui
						onSubmit={method.handleSubmit(submitHnalder)}
						component={"form"}>
						<TextField
							label="Enter your email"
							{...method.register("email", {
								required: "Enter your email",
								pattern: {
									value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
									message: "Ведите действуйший емайл",
								},
							})}
							error={errors}
						/>

						<TextField
							label="Enter your Password"
							{...method.register("password", {
								required: "Enter your password required",
								minLength: {
									value: 6,
									message: "Пароль должен быть не меене 6 символов",
								},
							})}
							error={errors}
						/>
						{errors && (
							<p style={{ fontFamily: "sans-serif", color: "red" }}>
								Пароль или Емайл не верный попробуйте еще раз{" "}
							</p>
						)}
						<Button variant="contained" type="submit">
							Submit
						</Button>
						<Button variant="outlined" type="button">
							<NavLink style={{ textDecoration: "none" }} to="/sign-up">
								Зарегистрироватся
							</NavLink>
						</Button>
					</BoxMui>
				</FormProvider>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default SignIn;
const BoxMui = styled(Box)(() => {
	return {
		width: "450px",
		minHeight: "190px",
		border: "1px solid black",
		padding: 20,
		display: "flex",
		flexDirection: "column",
		gap: 20,
		margin: "250px auto",
	};
});
