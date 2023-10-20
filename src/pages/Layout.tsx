import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Header from "../components/Header/Header";
//Pages
import Home from "../pages/Home/Home";
import Courses from "./Courses/Courses";
import Subsriptions from "./Subscriptions/Subsriptions";


interface ILayout { }

const Layout: React.FC<ILayout> = (props) => {
	return (
		<div className="main-layout">
			<Header />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route index path="/courses" element={<Courses />} />
				<Route index path="/subscriptions" element={<Subsriptions />} />
			</Routes>
		</div>
	);
};

export default memo(Layout);
