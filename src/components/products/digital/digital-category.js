import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import Datatable from "../../common/datatable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import {
	addCategory,
	getCategories
} from '../../../actions';
import { SERVER_URL } from "../../../config";

const Digital_category = () => {
	const [data, setData] = React.useState([]);
	const [open, setOpen] = useState(false);
	const [imagedata, setImagedata] = React.useState("");
	const fileRef = React.useRef(null);
	const [name, setName] = React.useState("");
	const [nameError, setNameError] = React.useState(false);
	const [imageError, setImageError] = React.useState(false);
	
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
	
	const changeImage = async (e) => {
		const base64 = await convertBase64(e.target.files[0]);
		setImagedata(base64);
	};

	const onSave = () => {
		if(name === "") {
			setNameError(true);
			return;
		} else if(imagedata === "") {
			setNameError(false);
			setImageError(true);
			return;
		}

		const dataT = {
			name: name,
			imagedata: imagedata,
		};
		addCategory(dataT).then(res => {
			let temp = [...data];
			temp.push({
				id: res.id,
				name: name,
				image: <img alt="" src={`${SERVER_URL + '\\' + res.imageUrl}`} style={{width:50,height:50}}/>
			});
			setData(temp);
			toast.success("Successfully Added!");
			onCloseModal();
		});
	};

	React.useEffect(() => {
		getCategories().then(res => {
			let temp = [];
			console.log(res.categories)
			res.categories.forEach(category => {
				temp.push({
					id: category.id,
					name: category.name,
					image: <img alt="" src={`${SERVER_URL + '\\images\\category\\' + category.image}`} style={{width:50,height:50}}/>
				});
			});
			setData(temp);
		});
	}, []);

	return (
		<Fragment>
			<Breadcrumb title="Category" parent="Products" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Category</h5>
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
										Add Category
									</Button>
									<Modal isOpen={open} toggle={onCloseModal}>
										<ModalHeader toggle={onCloseModal}>
											<h5
												className="modal-title f-w-600"
												id="exampleModalLabel2"
											>
												Add Category
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
														Category Image :
													</Label>
													<Input
														className={imageError ? 'form-control input-error' : 'form-control'}
														id="validationCustom02"
														type="file"
														ref={fileRef}
														onChange={changeImage}
													/>
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

export default Digital_category;
