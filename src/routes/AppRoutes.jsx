import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ProtectedRouter from "./ProtectedRouter";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authSlice";

const AppRoutes = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => state.auth);
	console.log(auth, "auth");
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<ProtectedRouter
					Component={<BaseLayout />}
					isAuth={auth}
					fallbackPath="sign-in"
				/>
			),
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
		{
			path: "sign-up",
			element: (
				<ProtectedRouter
					fallbackPath={"/"}
					isAuth={!auth}
					Component={<SignUp />}
				/>
			),
		},
		{
			path: "sign-in",
			element: (
				<ProtectedRouter
					fallbackPath={"/"}
					isAuth={!auth}
					Component={<SignIn />}
				/>
			),
		},
	]);

	useEffect(() => {
		const local = localStorage.getItem("TOKEN");
		if (local) {
			dispatch(login(local));
		}
	}, [dispatch]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
