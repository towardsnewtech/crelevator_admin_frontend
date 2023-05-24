import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import Datatable from "../common/datatable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import {
	addPdf,
	getPdfs
} from '../../actions';
import { SERVER_URL } from "../../config";

const PDFs_material = () => {
	const [data, setData] = React.useState([]);
	const [open, setOpen] = useState(false);
	const [file, setFile] = React.useState("");
	const fileRef = React.useRef(null);
	const [name, setName] = React.useState("");
	const [nameError, setNameError] = React.useState(false);
	const [imageError, setImageError] = React.useState(false);
    const [type, setType] = React.useState();
	
	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setName("");
		fileRef.current.value = '';
		setOpen(false);
		setImageError(false);
		setNameError(false);
	};

	const changeName = (e) => {
		setName(e.target.value);
	};
	
	const changeFile = async (e) => {
		setFile(e.target.files[0]);
	};

    const changeType = async (e) => {
        setType(e.target.value);
    }

	const onSave = () => {
		if(name === "") {
			setNameError(true);
			return;
		}

		const formData = new FormData() ;
        formData.append('name', name);
        formData.append('type', type);
        formData.append('file', file);
		addPdf(formData).then(res => {
			let temp = [...data];
			temp.push({
				id: res.id,
				name: name,
                type: type == 0? 'PDFs material' : type == 1? 'EDF' : 'Other',
				option: <a alt="" href={`${SERVER_URL + '\\' + res.title}`} target="_blank">view</a>
			});
			setData(temp);
			toast.success("Successfully Added!");
			onCloseModal();
		});
	};

	React.useEffect(() => {
		getPdfs().then(res => {
			let temp = [];
			res.pdfs.forEach(pdf => {
				temp.push({
					id: pdf.id,
					name: pdf.name,
                    type: pdf.type == 0? 'PDFs material' : pdf.type == 1? 'EDF' : 'Other',
					option: <a href={`${SERVER_URL + '\\pdfs\\' + pdf.title}`} target="_blank">view</a>
				});
			});
			setData(temp);
		});
	}, []);

	return (
		<Fragment>
			<Breadcrumb title="PDFs material" parent="Products" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>PDFs material</h5>
							</CardHeader>
							<CardBody>
								<div className="btn-popup pull-right">
									<Button
										type="button"
										color="secondary"
										onClick={onOpenModal}
										data-toggle="modal"
										data-original-title="test"
										data-target="#exampleModal"
									>
										Add pdf
									</Button>
									<Modal isOpen={open} toggle={onCloseModal}>
										<ModalHeader toggle={onCloseModal}>
											<h5
												className="modal-title f-w-600"
												id="exampleModalLabel2"
											>
												Add Pdf
											</h5>
										</ModalHeader>
										<ModalBody>
											<Form>
												<FormGroup>
													<Label
														htmlFor="recipient-name"
														className="col-form-label"
													>
														Name :
													</Label>
													<Input type="text" className={nameError ? 'form-control input-error' : 'form-control'} value={name}
														onChange={changeName} />
												</FormGroup>
												<FormGroup>
													<Label
														htmlFor="message-text"
														className="col-form-label"
													>
														PDF File :
													</Label>
													<Input
														className={imageError ? 'form-control input-error' : 'form-control'}
														id="validationCustom02"
														type="file"
														ref={fileRef}
														onChange={changeFile}
													/>
												</FormGroup>
                                                <FormGroup>
													<Label
														htmlFor="message-text"
														className="col-form-label"
													>
														PDF Type :
													</Label>
													<Input
														className={imageError ? 'form-control input-error' : 'form-control'}
														id="validationCustom02"
														type="select"
                                                        value={type}
														onChange={changeType}
													>
                                                        <option value='0' selected>PDFs material</option>
                                                        <option value='1'>EDF</option>
                                                        <option value='2'>Other</option>
                                                    </Input>
												</FormGroup>
											</Form>
										</ModalBody>
										<ModalFooter>
											<Button
												type="button"
												color="primary"
												onClick={onSave}
											>
												Save
											</Button>
											<Button
												type="button"
												color="secondary"
												onClick={onCloseModal}
											>
												Close
											</Button>
										</ModalFooter>
									</Modal>
								</div>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical">
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={5}
										pagination={true}
										class="-striped -highlight"
                                        productTableType={6}
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

export default PDFs_material;
