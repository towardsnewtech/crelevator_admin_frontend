import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import MyDropzone from "../../common/dropzone";
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import MDEditor from "@uiw/react-md-editor";
import { addProduct, getCategories } from "../../../actions";
import { ToastContainer, toast } from "react-toastify";

const Digital_add_pro = () => {
	const [availability, setAvailablility] = useState('')
	const [features, setFeatures] = useState('')
	const [specifications, setSpecifications] = useState('')
	const [category_list, setCategoryList] = useState([]) ;
	const [selected_category, setSelectedCategory] = useState();
	const [sub_category_list, setSubCategoryList] = useState([]);
	const [selected_sub_category, setSelectSubCategory] = useState();
	const [imagedata, setImagedata] = React.useState("");
	const fileRef = React.useRef(null);
	const [imageError, setImageError] = React.useState(false);
	const [product_name, setProductName] = React.useState("");
	const [product_price, setProductPrice] = React.useState(0);
	const [contact_no, setChangeContactNo] = React.useState("");

	const changeImage = async (e) => {
		const base64 = await convertBase64(e.target.files[0]);
		setImagedata(base64);
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
	const onChangeProductName = (e) => {
		setProductName(e.target.value)
	}
	const onChangeProductPrice = (e) => {
		setProductPrice(e.target.value)
	}
	const onChangeContactNo = (e) => {
		setChangeContactNo(e.target.value)
	}
	const onChangeAvailability = (e) =>{
		setAvailablility(e)
	}
	const onChangeFeatures = (e) => {
		setFeatures(e)
	}
	const onChangeSpecifications = (e) => {
		setSpecifications(e)
	}
	const onChangeSelectCategory = (e) => {
		setSelectedCategory(category_list[parseInt(e.target.value)]);
	}
	const onSelectSubCategory = (e) => {
		setSelectSubCategory(selected_sub_category[parseInt(e.target.value)]);
	}

	useEffect(() => {
		getCategories().then(res => {
			setCategoryList(res.categories);
			if(res.categories.length) {
				if(res.categories[0].SubCategories?.length) {
					setSubCategoryList(res.categories[0].SubCategories);
					setSelectSubCategory(res.categories[0].SubCategories[0])
				}
			}
		});
	}, []);

	const onSave = () => {
		console.log(availability);

		addProduct({
			product_name,
			product_price,
			contact_no,
			selected_sub_category,
			availability,
			imagedata,
			features,
			specifications
		}).then(res => {
			console.log(res);
			toast.success("Successfully Added!");
		})
	}
	return (
		<Fragment>
			<Breadcrumb title="Add Products" parent="Digital" />
			<Container fluid={true}>
				<Row className="product-adding">
					<Col xl="6">
						<Card>
							<CardHeader>
								<h5>General</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup>
										<Label className="col-form-label pt-0">
											<span>*</span> Product Name
										</Label>
										<Input
											className="form-control"
											id="validationCustom01"
											type="text"
											required=""
											value={product_name}
											onChange={onChangeProductName}
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label pt-0">
											<span>*</span> Contact No
										</Label>
										<Input
											className="form-control"
											id="validationCustom02"
											type="text"
											required=""
											value={contact_no}
											onChange={onChangeContactNo}
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Categories
										</Label>
										<select className="form-select" required=""
											onChange={onChangeSelectCategory}
										>
											{
												category_list.map((category, index) => (
													<option key={category.id} value={index}>{category.name}</option>
												))
											}
										</select>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Sub Category
										</Label>
										<select className="form-select" required=""
											onChange={onSelectSubCategory}
										>
											{
												sub_category_list.map((sub_category, index) => (
													<option key={sub_category.id} value={index} >{sub_category.name}</option> 
												))
											}
										</select>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label">
											<span>*</span> Product Price
										</Label>
										<Input
											className="form-control"
											id="validationCustom02"
											type="text"
											required=""
											value={product_price}
											onChange={onChangeProductPrice}
										/>
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
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col xl="6">
						<Card>
							<CardHeader>
								<h5>Availability</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup className=" mb-0">
										<div className="description-sm">
											<MDEditor
												value={availability}
												onChange={onChangeAvailability}
											/>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<h5>Features</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup className=" mb-0">
										<div className="description-sm">
											<MDEditor
												value={features}
												onChange={onChangeFeatures}
											/>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<h5>Specifications</h5>
							</CardHeader>
							<CardBody>
								<div className="digital-add needs-validation">
									<FormGroup className=" mb-0">
										<div className="description-sm">
											<MDEditor
												value={specifications}
												onChange={onChangeSpecifications}
											/>
										</div>
									</FormGroup>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Button
						type="button"
						color="secondary"
						onClick={onSave}
						data-toggle="modal"
						data-original-title="test"
						data-target="#exampleModal"
					>
						Add Product
					</Button>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Digital_add_pro;
