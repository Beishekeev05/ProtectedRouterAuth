import React from "react";
import { store } from "./redux/index.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
		<Provider store={store}>
			<App />
		</Provider>
);
