import React, { Fragment, useEffect } from "react";
import LoginTabset from "./loginTabset";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import stats from "../../assets/images/dashboard/stats.png";
import "../../assets/scss/slick.scss";
import "../../assets/scss/slick-theme.scss";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ForgotPassword from "./forgotPassword";

const Login = () => {
	const navigate = useNavigate();
	const [flag, setFlag] = React.useState(1)
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: false,
	};

	useEffect(() => {
		if(localStorage.getItem('crelevator_admin_token') !== null) {
			navigate(`${process.env.PUBLIC_URL}/dashboard`);
		}
	}, []);

	return (
		<Fragment>
			<div className="page-wrapper">
				<div className="authentication-box">
					<Container>
						<Row>
							<Col className="col-md-5 p-0 card-left">
								<Card className="bg-primary">
									<div className="svg-icon">
										<img alt="" src={stats} className="Img-fluid" />
									</div>
									<Slider className="single-item" {...settings}>
										<div>
											<div>
												<h3>Welcome to CR Elevator Supply</h3>
												<p>
													Since 202, CrElevator, Inc. has been the premier publisher
													for the global vertical transportation industry. It employs
													specialists in USA, and has technical and news correspondents
													around the world
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to CR Elevator Supply</h3>
												<p>
													Since 202, CrElevator, Inc. has been the premier publisher
													for the global vertical transportation industry. It employs
													specialists in USA, and has technical and news correspondents
													around the world
												</p>
											</div>
										</div>
										<div>
											<div>
												<h3>Welcome to CR Elevator Supply</h3>
												<p>
													Since 202, CrElevator, Inc. has been the premier publisher
													for the global vertical transportation industry. It employs
													specialists in USA, and has technical and news correspondents
													around the world
												</p>
											</div>
										</div>
									</Slider>
								</Card>
							</Col>
							<Col className="col-md-7 p-0 card-right">
								<Card className="tab2-card">
									<CardBody>
										{ flag == 1 && <LoginTabset setFlag={setFlag} /> }
										{ flag == 2 && <ForgotPassword setFlag={setFlag} /> }
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
