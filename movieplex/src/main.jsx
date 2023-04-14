import React from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/layout";
import "./index.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Layout />}>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/register"
				element={<Register />}
			/>
		</Route>,
	),
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
