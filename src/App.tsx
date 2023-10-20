import React, { memo, useCallback, useRef, useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./App.scss";
//prime core
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
//Component

//Pages
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";

interface IApp {}

const App: React.FC<IApp> = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	const login = useCallback(() => {
		setIsLoggedIn(true);
		navigate("/");
	}, []);

	return <>{!isLoggedIn ? <Login onSubmit={login} /> : <Layout />}</>;
};

export default memo(App);
