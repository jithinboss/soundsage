import React, { memo } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
//Assets
import logo from "../../assets/logo.svg";
import google from "../../assets/google-logo.svg";
import facebook from "../../assets/facebook-logo.svg";
import banner_img from "../../assets/banner_img.png";
import banner_img_2 from "../../assets/banner-img_2.png";
import banner_img_3 from "../../assets/banner-img_3.png";

interface ILogin {
	onSubmit?: () => void;
}
const Login: React.FC<ILogin> = (props) => {
	const { onSubmit = () => { } } = props;
	return (
		<section className="login-section">
			<Container fluid className="p-0">
				<Row noGutter>
					<Col lg={6} className="align-self-center">
						<div className="login-form">
							<div className="logo"><img src={logo} /></div>
							<h5 className="title">Welcome back !</h5>
							<div className="login-button">
								<img src={google} /> <span>Sign in with Google</span>
							</div>
							<div className="login-button">
								<img src={facebook} /> <span>Sign in with Facebook</span>
							</div>
							{/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="name@example.com" />
								</Form.Group>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group> */}
							<Button variant="primary login" onClick={() => onSubmit()}>
								Instructor Login
							</Button>
						</div>
					</Col>
					<Col lg={6}>
						{/* <div className="banner-masonry_wrapper">
							<div className="banner-masonry">
								<div className="banner_img" style={{ backgroundImage: `url(${banner_img})` }}>
								</div>
								<img src={banner_img_1} />
							<img src={banner_img_2} />
							<img src={banner_img_3} />
								<div className="banner_img" style={{ backgroundImage: `url(${banner_img_1})` }}></div>
								<div className="banner_img" style={{ backgroundImage: `url(${banner_img_2})` }}></div>
								<div className="banner_img" style={{ backgroundImage: `url(${banner_img_3})` }}></div>
							</div>
						</div> */}
						<div className="banner-masonry">
							<div className="banner_img" style={{ backgroundImage: `url(${banner_img})` }}>
							</div>

						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default memo(Login);
