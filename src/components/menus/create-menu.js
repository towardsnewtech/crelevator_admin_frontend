import React, { Fragment } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";

const Create_menu = () => {
	return (
		<Fragment>
			<Breadcrumb title="Create Menu" parent="Menus" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Add Menu</h5>
							</CardHeader>
							<CardBody>
								<Form className="needs-validation">
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">
											<span>*</span> Menu Name
										</Label>
										<div className="col-md-8">
											<Input
												className="form-control"
												id="validationCustom0"
												type="text"
												required=""
											/>
										</div>
									</div>
									<div className="form-group row">
										<Label className="col-xl-3 col-md-4">Status</Label>
										<div className="col-xl-9 col-md-8">
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
									<Button type="button" color="primary">
										Save
									</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Create_menu;
