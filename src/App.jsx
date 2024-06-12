import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/announstment/asynAnnounstment";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, []);
	return (
		<div>
			{/* <SignUp /> */}
			<AppRoutes />
		</div>
	);
}

export default App;
