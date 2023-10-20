import React, { memo, useMemo, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
//Assets
import logo from "../../assets/logo.svg";
//Components
import userimg from "../../assets/userimg.png";

interface IHeader { }

const Header: React.FC<IHeader> = (props) => {
	const location: any = useLocation();

	const locationName = useMemo(() => {
		let path = "";
		const filterItem = location?.pathname?.split('/');
		if (filterItem?.length)
			path = filterItem[1]
		return `/${path}`;
	}, [location])

	return (
		<header>
			<Navbar expand="lg">
				<Navbar.Brand className="logo">
					<img src={logo} />
				</Navbar.Brand>
				<Nav activeKey={locationName} >
					<Nav.Link eventKey="/" as={"div"}>
						<Link to="/">Home</Link>
					</Nav.Link>
					<Nav.Link eventKey="/validations" as={"div"}>
						<Link to="/validations">Courses</Link>
					</Nav.Link>
					<Nav.Link eventKey="/settings" as={"div"}>
						<Link to="/settings">Subscriptions</Link>
					</Nav.Link>
				</Nav>
			</Navbar>
			<div className="user-info">
				<div className="user-img">
					<img src={userimg} />
				</div>
				<div className="user-details">
					<span className="name">Charley Myers</span>
					<span className="email">cmyers@gmail.com</span>
				</div>
			</div>
		</header>
	);
};

export default memo(Header);
