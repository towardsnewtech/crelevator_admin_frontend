import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";

const Tabset = () => {
	const [startDate, setstartDate] = useState(new Date());
	const [endDate, setendDate] = useState(new Date());

	const handleStartDate = (date) => {
		setstartDate(date);
	};

	const handleEndDate = (date) => {
		setendDate(date);
	};

	const clickActive = (event) => {
		document.querySelector(".nav-link").classList.remove("show");
		event.target.classList.add("show");
	};

	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						General
					</Tab>
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Restriction
					</Tab>
					<Tab className="nav-link" onClick={(e) => clickActive(e)}>
						Usage
					</Tab>
				</TabList>

				<TabPanel>
					<div className="tab-pane fade active show">
						<Form className="needs-validation" noValidate="">
							<h4>General</h4>
							<Row>
								<Col sm="12">
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Name
										</Label>
										<div className="col-md-7">
											<Input
												className="form-control"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Code
										</Label>
										<div className="col-md-7">
											<Input
												className="form-control"
												id="validationCustom1"
												type="text"
												required=""
											/>
										</div>
										<div className="valid-feedback">
											Please Provide a Valid Coupon Code.
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Start Date</Label>
										<div className="col-md-7">
											<DatePicker
												selected={startDate}
												onChange={handleStartDate}
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">End Date</Label>
										<div className="col-md-7">
											<DatePicker
												selected={endDate}
												endDate={endDate}
												onChange={handleEndDate}
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Free Shipping</Label>
										<div className="col-md-7">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Allow Free Shipping
											</Label>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Quantity</Label>
										<div className="col-md-7">
											<Input
												className="form-control"
												type="number"
												required=""
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Discount Type</Label>
										<div className="col-md-7">
											<select className="form-select" required="">
												<option value="">--Select--</option>
												<option value="1">Percent</option>
												<option value="2">Fixed</option>
											</select>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Status</Label>
										<div className="col-md-7">
											<Label className="d-block">
												<Input
													className="checkbox_animated"
													id="chk-ani2"
													type="checkbox"
												/>
												Enable the Coupon
											</Label>
										</div>
									</div>
								</Col>
							</Row>
						</Form>
					</div>
				</TabPanel>
				<TabPanel>
					<Form className="needs-validation" noValidate="">
						<h4>Restriction</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Products</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom3"
									type="text"
									required=""
								/>
							</div>
							<div className="valid-feedback">
								Please Provide a Product Name.
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Category</Label>
							<div className="col-md-7">
								<select className="form-select" required="">
									<option value="">--Select--</option>
									<option value="1">Electronics</option>
									<option value="2">Clothes</option>
									<option value="2">Shoes</option>
									<option value="2">Digital</option>
								</select>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Minimum Spend</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom4"
									type="number"
								/>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Maximum Spend</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom5"
									type="number"
								/>
							</div>
						</div>
					</Form>
				</TabPanel>
				<TabPanel>
					<Form className="needs-validation" noValidate="">
						<h4>Usage Limits</h4>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Per Limit</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom6"
									type="number"
								/>
							</div>
						</div>
						<div className="form-group row">
							<Label className="col-xl-3 col-md-4">Per Customer</Label>
							<div className="col-md-7">
								<Input
									className="form-control"
									id="validationCustom7"
									type="number"
								/>
							</div>
						</div>
					</Form>
				</TabPanel>
			</Tabs>
			<div className="pull-right">
				<Button type="button" color="primary">
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default Tabset;
