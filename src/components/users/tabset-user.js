import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser, signup } from "../../actions";

const TabsetUser = () => {
	const history = useNavigate();
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [confirmPassword, setConfirmPassword] = React.useState("");
	const [accountType, setAccountType] = React.useState("");
	const [step, setStep] = React.useState(1);
	const [image, setImage] = React.useState(null);
	const [imagedata, setImagedata] = React.useState("");

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

	const changeAccountType = (e) => {
		setAccountType(e.target.value)
	}

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
		if (success) {
			toast.success(text, options);
		} else {
			toast.warn(text, options);
		}
	};

	const save = () => {
		let text = "";
		if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
			if (firstName === "") {
				text += "First Name";
			}
			if (lastName === "") {
				if (text === "") {
					text += "Last Name";
				} else {
					text += ", Last Name";
				}
			}
			if (email === "") {
				if (text === "") {
					text += "Email";
				} else {
					text += ", Email";
				}
			}
			if (password === "") {
				if (text === "") {
					text += "Password";
				} else {
					text += ", Password";
				}
			}
			if (confirmPassword === "") {
				if (text === "") {
					text += "Confirm Password";
				} else {
					text += ", Confirm Password";
				}
			}

			notify('Please input ' + text + '.', false);
			return;
		}

		if (confirmPassword !== password) {
			notify('Passwords do not match. Please try again.', false);
			return;
		}

		const data = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			password: password,
			account_type: accountType,
			imagedata: imagedata || "no image"
		};
		if (accountType == 0) {
			signup(data).then(res => {
				if (res.success) {
					notify("Admin created successfully", true);
					history(`${process.env.PUBLIC_URL}/users/list-user`);
				} else {
					notify(res.msg, false);
				}
			});
		} else {
			createUser(data).then(res => {
				if (res.success) {
					notify("User created successfully", true);
					history(`${process.env.PUBLIC_URL}/users/list-user`);
				} else {
					notify(res.msg, false);
				}
			});
		}
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result);
			}
			fileReader.onerror = (error) => {
				reject(error);
			}
		})
	}

	const handleImageChange = async (event) => {
		const selectedImage = event.target.files[0];
		setImage(selectedImage);
		const base64 = await convertBase64(event.target.files[0]);
		setImagedata(base64)
	}

	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<div className={`nav-link ${step === 1 && "active"}`}
						onClick={() => setStep(1)}
					>
						Account
					</div>
					<div className={`nav-link ${step === 2 && "active"}`}
						onClick={() => { setStep(2) }}
					>
						Permission
					</div>
				</TabList>
				<TabPanel
				>
					{
						step === 1 ? <Fragment>
							<Form className="needs-validation user-add" noValidate="">
								<h4>Account Details</h4>
								<FormGroup className="row" style={{ display: 'flex', justifyContent: 'center' }}>
									<input
										type="file"
										id="imageUpload"
										onChange={handleImageChange}
										hidden
									/>
									<label
										htmlFor="imageUpload"
										style={{
											border: '1px solid black',
											width: 200,
											height: 200,
											borderRadius: '50%',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										{
											image ? <img src={URL.createObjectURL(image)} alt="Uploaded Image" style={{ width: '200px', borderRadius: '50%' }} /> : 
											<span>
												Upload Image
											</span>
										}
									</label>
								</FormGroup>
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
							<div className="pull-right">
								<Button type="button" color="primary" onClick={() => {
									setStep(2)
								}}>
									NEXT
								</Button>
							</div>
						</Fragment> : <Fragment>
							<Form>
								<FormGroup className="row">
									<Label className="col-xl-3 col-md-4">
										<span>*</span> Account Type
									</Label>
									<div className="col-xl-8 col-md-7">
										<select
											className="form-select"
											required=""
											onChange={changeAccountType}
											value={accountType}
										>
											<option value='0'>Admin</option>
											<option value='1'>User</option>
											<option value='2'>Customer</option>
										</select>
									</div>
								</FormGroup>
							</Form>
							<div className="pull-right">
								<Button type="button" color="primary" onClick={save}>
									SAVE
								</Button>
							</div>
						</Fragment>
					}
				</TabPanel>
			</Tabs>
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
