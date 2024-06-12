import React from "react";
import { Navigate } from "react-router";

const ProtectedRouter = ({ isAuth, Component, fallbackPath }) => {
	if (isAuth) {
		return Component;
	}
	return <Navigate to={fallbackPath} />;
};

export default ProtectedRouter;
