import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/sub-category";
import Datatable from "../../common/datatable";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Row,  ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";

const Sub_category = () => {
	const [open, setOpen] = useState(false);

	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Breadcrumb title="Sub Category" parent="Physical" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Products Sub Category</h5>
							</CardHeader>
							<CardBody>
								<div className="btn-popup pull-right">
									<Button
										type="button"
										color="primary"
										onClick={onOpenModal}
										data-toggle="modal"
										data-original-title="test"
										data-target="#exampleModal"
									>
										Add Sub Category
									</Button>
									<Modal isOpen={open} toggle={onCloseModal}>
										<ModalHeader toggle={onCloseModal}>
											<h5
												className="modal-title f-w-600"
												id="exampleModalLabel2"
											>
												Add Physical Product
											</h5>
										</ModalHeader>
										<ModalBody>
											<Form>
												<FormGroup>
													<Label
														htmlFor="recipient-name"
														className="col-form-label"
													>
														Sub Category Name :
													</Label>
													<Input type="text" className="form-control" />
												</FormGroup>
												<FormGroup>
													<Label
														htmlFor="message-text"
														className="col-form-label"
													>
														Sub Category Image :
													</Label>
													<Input
														className="form-control"
														id="validationCustom02"
														type="file"
													/>
												</FormGroup>
											</Form>
										</ModalBody>
										<ModalFooter>
											<Button
												type="button"
												color="primary"
												onClick={() => onCloseModal("VaryingMdo")}
											>
												Save
											</Button>
											<Button
												type="button"
												color="secondary"
												onClick={() => onCloseModal("VaryingMdo")}
											>
												Close
											</Button>
										</ModalFooter>
									</Modal>
								</div>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical">
									<Datatable
										myData={data}
										multiSelectOption={false}
										pageSize={10}
										pagination={true}
										class="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			{/* <!-- Container-fluid Ends--> */}
		</Fragment>
	);
};
export default Sub_category;
