import React, { Fragment, useState } from "react";
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Label, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import TabsetUser from "./tabset-user";
import { getUserInfo } from "../../actions";
import { FormControl } from "react-bootstrap";
import { SERVER_URL } from "../../config";
import './user-profile.css';

const User_profile = () => {
	const params = useParams();
	const [userInfo, setUserInfo] = useState();

	React.useEffect(() => {
		if (params?.id) {

			getUserInfo(params.id).then(res => {
				console.log(res.data)
				setUserInfo(res.data)
			}).catch(err => {
				console.log(err)
			})
		}
	}, [params])
	return (
		<Fragment>
			<Breadcrumb title="User" parent="Profile" />
			<Container fluid={true}>
				<Row>
					<Col sm="4">
						<Card>
							<CardHeader style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
								{ userInfo?.User_Address.photo == "" || userInfo == undefined ?
									<div style={{ width: '200px', height: '200px', borderRadius: '50%', border: '1px solid red', marginBottom: '2rem'}}></div>
									: <img src={`${SERVER_URL + '\\images\\photo\\' + userInfo?.User_Address.photo}`} alt="Uploaded Image" style={{ width: '200px', borderRadius: '50%', marginBottom: '2rem' }} />
								}
								<h3><b>{userInfo?.first_name}&nbsp;{userInfo?.last_name}</b></h3>
								<h5>{userInfo?.email}</h5>
								<Form className="form-horizontal auth-form" style={{ width: '50%', marginTop: '2rem' }}>
									<div className="form-footer" style={{ textAlign: 'center' }}>
										<ul className="social" style={{ display: 'flex', justifyContent: 'space-around' }}>
											<li className="social_li" style={{ backgroundColor: '#50598b' }}>
												<a href="/#">
													<i className="icon-facebook social_icon"></i>
												</a>
											</li>
											<li className="social_li" style={{ backgroundColor: '#71a2d4' }}>
												<a href="/#">
													<i className="icon-google social_icon"></i>
												</a>
											</li>
											<li className="social_li" style={{ backgroundColor: '#c45144' }}>
												<a href="/#">
													<i className="icon-twitter-alt social_icon"></i>
												</a>
											</li>											
										</ul>
									</div>
								</Form>
							</CardHeader>
							<CardBody>								
								<h3><b>User Status</b></h3>
							</CardBody>
						</Card>
					</Col>
					<Col sm="8">
						<Card>
							<CardHeader>
								<h5> Profile </h5>
							</CardHeader>
							<CardBody>
								<Row style={{ marginBottom: 20 }}>
									<Col sm='4'>
										First Name:
									</Col>
									<Col sm='8'>
										{userInfo?.first_name}
									</Col>
								</Row>
								<Row style={{ marginBottom: 20 }}>
									<Col sm='4'>
										Last Name:
									</Col>
									<Col sm='8'>
										{userInfo?.last_name}
									</Col>
								</Row>
								<Row style={{ marginBottom: 20 }}>
									<Col sm='4'>
										Email:
									</Col>
									<Col sm='8'>
										{userInfo?.email}
									</Col>
								</Row>
								<Row style={{ marginBottom: 20 }}>
									<Col sm='4'>
										Mobile Number:
									</Col>
									<Col sm='8'>
										{userInfo?.User_Address.phone}
									</Col>
								</Row>
								<Row style={{ marginBottom: 20 }}>
									<Col sm='4'>
										Location:
									</Col>
									<Col sm='8'>
										{userInfo?.User_Address.country}
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default User_profile;
