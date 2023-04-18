import React, { Fragment, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import Datatable from "../../common/datatable";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	addSubCategory,
	getCategories,
	getSubCategories
} from '../../../actions';
import { SERVER_URL } from "../../../config";

const Digital_sub_category = () => {
	const [data, setData] = React.useState([]);
	const [open, setOpen] = useState(false);
	const [imagedata, setImagedata] = React.useState("");
	const fileRef = React.useRef(null);
	const [name, setName] = React.useState("");
	const [nameError, setNameError] = React.useState(false);
	const [imageError, setImageError] = React.useState(false);
	const [category_list, setCategoryList] = React.useState([]);
	const [selected_category, setSelectedCategory] = React.useState('');

	const onSelectCategory = (e) => {
		setSelectedCategory(category_list[parseInt(e.target.value)]);
	}

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
			category_id: selected_category.id,
			name: name,
			imagedata: imagedata,
		};
		addSubCategory(dataT).then(res => {
			let temp = [...data];
			console.log(res);

			temp.push({
				id: res.id,
				category: selected_category.name,
				name: name,
				image: <img alt="" src={`${SERVER_URL + '\\' + res.imageUrl}`} style={{width:50,height:50}}/>
			});
			setData(temp);
			toast.success("Successfully Added!");
			onCloseModal();
		});
	};

	React.useEffect(() => {
		getSubCategories().then(res => {
			let temp = [];
			res.categories.forEach(category => {
				temp.push({
					id: category.id,
					name: category.name,
					image: <img alt="" src={`${SERVER_URL + '\\images\\subcategory\\' + category.image}`} style={{width:50,height:50}}/>
				});
			});
			setData(temp);
		});
	}, []);

	React.useEffect(() => {
		getCategories().then(res => {
			setCategoryList(res.categories);
		})
	}, []);

	return (
		<Fragment>
			<Breadcrumb title="Sub Category" parent="Products" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid="true">
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Sub Category</h5>
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
										Add Sub Category
									</Button>
									<Modal isOpen={open} toggle={onCloseModal}>
										<ModalHeader toggle={onCloseModal}>
											<h5
												className="modal-title f-w-600"
												id="exampleModalLabel2"
											>
												Add Sub Category
											</h5>
										</ModalHeader>
										<ModalBody>
											<Form>
												<FormGroup>
													<Label className="col-form-label">
														<span>*</span> Categories
													</Label>
													<select className="form-select" required=""
														onChange={onSelectCategory}
													>
														<option value="">--Select--</option>
														{
															category_list.map((category, index) => (
																<option key={category.id} value={index}>{category.name}</option>
															))
														}
													</select>
												</FormGroup>
												<FormGroup>
													<Label
														htmlFor="recipient-name"
														className="col-form-label"
													>
														Sub Category Name :
													</Label>
													<Input type="text" className={nameError ? 'form-control input-error' : 'form-control'} value={name}
														onChange={changeName} />
												</FormGroup>
												<FormGroup>
													<Label
														htmlFor="message-text"
														className="col-form-label"
													>
														Sub Category Image :
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
										pageSize={6}
										pagination={true}
										class="-striped -highlight"
										productTableType={2}
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

export default Digital_sub_category;
