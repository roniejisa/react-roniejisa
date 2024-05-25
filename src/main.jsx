import React from "react";
import ReactDOM from "react-dom/client";
import Test from "~~/Test.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Test />
		</BrowserRouter>
	</React.StrictMode>
);
