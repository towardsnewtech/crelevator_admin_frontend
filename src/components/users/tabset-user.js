import React, { Fragment } from "react";
import {  useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from "../../actions";

const TabsetUser = () => {
	const history = useNavigate();
	const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");

	const changeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const changeLastName = (e) => {
        setLastName(e.target.value);
    };

    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

	const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

	const notify = (text, success) => {
        const options = {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        };
        if(success) {
            toast.success(text, options);
        } else {
            toast.warn(text, options);
        }
    };

	const save = () => {
		let text = "";
		if(firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
			if(firstName === "") {
				text += "First Name";
			}
			if(lastName === "") {
				if(text === "") {
					text += "Last Name";
				} else {
					text += ", Last Name";
				}
			}
			if(email === "") {
				if(text === "") {
					text += "Email";
				} else {
					text += ", Email";
				}
			}
			if(password === "") {
				if(text === "") {
					text += "Password";
				} else {
					text += ", Password";
				}
			}
			if(confirmPassword === "") {
				if(text === "") {
					text += "Confirm Password";
				} else {
					text += ", Confirm Password";
				}
			}

			notify('Please input ' + text + '.', false);
			return;
		}

		if(confirmPassword !== password) {
			notify('Passwords do not match. Please try again.', false);
			return;
		}

		const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };
		createUser(data).then(res => {
			if(res.success) {
				notify("User created successfully", true);
				history(`${process.env.PUBLIC_URL}/users/list-user`);
			} else {
                notify(res.msg, false);
            }
		});
	};

	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Account</Tab>
				</TabList>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<h4>Account Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> First Name
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom0"
									type="text"
									required=""
									value={firstName}
									onChange={changeFirstName}
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Last Name
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom1"
									type="text"
									required=""
									value={lastName}
									onChange={changeLastName}
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Email
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom2"
									type="email"
									required=""
									value={email}
									onChange={changeEmail}
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Password
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom3"
									type="password"
									required=""
									value={password}
									onChange={changePassword}
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Confirm Password
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom4"
									type="password"
									required=""
									value={confirmPassword}
									onChange={changeConfirmPassword}
								/>
							</div>
						</FormGroup>
					</Form>
				</TabPanel>
				{/* <TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<div className="permission-block">
							<div className="attribute-blocks">
								<h5 className="f-w-600 mb-3">Product Related Permission </h5>
								<Row>
									<Col xl="3" sm="4">
										<Label className="form-label">Add Product</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani1"
													type="radio"
													name="rdo-ani"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani2"
													type="radio"
													name="rdo-ani"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="form-label">Update Product</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani3"
													type="radio"
													name="rdo-ani1"
													defaultChecked
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani4"
													type="radio"
													name="rdo-ani1"
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="form-label">Delete Product</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className=" m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani5"
													type="radio"
													name="rdo-ani2"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani6"
													type="radio"
													name="rdo-ani2"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="mb-0 sm-label-radio">
											Apply Discount
										</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated pb-0">
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani7"
													type="radio"
													name="rdo-ani3"
												/>
												Allow
											</Label>
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani8"
													type="radio"
													name="rdo-ani3"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</div>
							<div className="attribute-blocks">
								<h5 className="f-w-600 mb-3">Category Related Permission </h5>
								<Row>
									<Col xl="3" sm="4">
										<Label className="form-label">Add Category</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani9"
													type="radio"
													name="rdo-ani4"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani10"
													type="radio"
													name="rdo-ani4"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="form-label">Update Category</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani11"
													type="radio"
													name="rdo-ani5"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani12"
													type="radio"
													name="rdo-ani5"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="form-label">Delete Category</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani13"
													type="radio"
													name="rdo-ani6"
												/>
												Allow
											</Label>
											<Label className="d-block">
												<Input
													className="radio_animated"
													id="edo-ani14"
													type="radio"
													name="rdo-ani6"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col xl="3" sm="4">
										<Label className="mb-0 sm-label-radio">
											Apply Discount
										</Label>
									</Col>
									<Col xl="9" sm="8">
										<FormGroup className="m-checkbox-inline custom-radio-ml d-flex radio-animated pb-0">
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani15"
													type="radio"
													name="rdo-ani7"
												/>
												Allow
											</Label>
											<Label className="d-block mb-0">
												<Input
													className="radio_animated"
													id="edo-ani16"
													type="radio"
													name="rdo-ani7"
													defaultChecked
												/>
												Deny
											</Label>
										</FormGroup>
									</Col>
								</Row>
							</div>
						</div>
					</Form>
				</TabPanel> */}
			</Tabs>
			<div className="pull-right">
				<Button type="button" color="primary" onClick={save}>
					Save
				</Button>
			</div>
			<ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
		</Fragment>
	);
};

export default TabsetUser;
