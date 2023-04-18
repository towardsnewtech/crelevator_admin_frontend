import React, { Fragment, useState, useRef } from "react";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	Button,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "reactstrap";
import { deleteUser, updateCategory, deleteCategory, updateSubCategory, deleteSubCategory, deleteProduct } from "../../actions";
import { SERVER_URL } from "../../config";

const Datatable = ({ myData, myClass, multiSelectOption, pagination, userTable=false, productTableType=0 }) => {
	const [open, setOpen] = useState(false);
	const [checkedValues, setCheckedValues] = useState([]);
	const [data, setData] = useState(myData);
	const [imagedata, setImagedata] = useState("");
	const fileRef = useRef(null);
	const [name, setName] = useState("");
	const [nameError, setNameError] = useState(false);
	const [selectedRow, setSelectedRow] = useState(-1);

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

	const selectRow = (e, i) => {
		if (!e.target.checked) {
			setCheckedValues(checkedValues.filter((item, j) => i !== item));
		} else {
			checkedValues.push(i);
			setCheckedValues(checkedValues);
		}
	};
	

	const handleRemoveRow = () => {
		const updatedData = myData.filter(function (el) {
			return checkedValues.indexOf(el.id) < 0;
		});

		if(userTable) {
			const tempData = {
				ids: checkedValues
			};
			deleteUser(tempData).then(res => {
				if(res.success) {
					setData([...updatedData]);
					toast.success("Successfully Deleted!");
				}
			});
		} else {
			setData([...updatedData]);
			toast.success("Successfully Deleted!");
		}
	};

	const renderEditable = (cellInfo) => {
		return (
			<div
				style={{ backgroundColor: "#fafafa" }}
				contentEditable
				suppressContentEditableWarning
				onBlur={(e) => {
					data[cellInfo.index][cellInfo.index.id] = e.target.innerHTML;
					setData({ myData: data });
				}}
				dangerouslySetInnerHTML={{
					__html: myData[cellInfo.index][cellInfo.index.id],
				}}
			/>
		);
	};

	const handleDelete = (index) => {
		if (window.confirm("Are you sure you wish to delete this item?")) {
			const dataT = {
				id: data[index].id,
			};
			if(productTableType === 0) {
				deleteCategory(dataT).then(res => {
					if(res.success) {
						const del = data;
						del.splice(index, 1);
						setData([...del]);
						toast.success("Successfully Deleted !");
					}
				});
			} else if(productTableType === 1) {
				deleteSubCategory(dataT).then(res => {
					if(res.success) {
						const del = data;
						del.splice(index, 1);
						setData([...del]);
						toast.success("Successfully Deleted !");
					}
				});
			} else {
				deleteProduct(dataT).then(res => {
					if(res.success) {
						const del = data ;
						del.splice(index, 1);
						setData([...del]);
						toast.success("Successfully Deleted !");
					}
				})
			}
		}
	};
	const onOpenModal = (index) => {
		setName(data[index].name);
		setSelectedRow(index);
		setOpen(true);
	};

	const update = () => {
		if(productTableType > 1) {

		} else {
			if(name === "") {
				setNameError(true);
				return;
			}
	
			const dataT = {
				id: data[selectedRow].id,
				name: name,
				imagedata: imagedata,
			};

			if(productTableType === 0) {
				updateCategory(dataT).then(res => {
					let temp = [...data];
					temp[selectedRow] = {
						id: data[selectedRow].id,
						name: name,
						image: <img alt="" src={`${SERVER_URL + '\\' + res.imageUrl}`} style={{width:50,height:50}}/>
					};
					setData(temp);
					toast.success("Successfully Updated!");
					onCloseModal();
				});
			} else if (productTableType === 1) {
				updateSubCategory(dataT).then(res => {
					let temp = [...data];
					temp[selectedRow] = {
						id: data[selectedRow].id,
						name: name,
						image: <img alt="" src={`${SERVER_URL + '\\' + res.imageUrl}`} style={{width:50,height:50}}/>
					};
					setData(temp);
					toast.success("Successfully Updated!");
					onCloseModal();
				});
			} 
		}
	};

	const onCloseModal = () => {
		setName("");
		fileRef.current.value = '';
		setOpen(false);
		setNameError(false);
	};

	const Capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const columns = [];
	for (const key in myData[0]) {
		let editable = renderEditable;
		if (key === "image") {
			editable = null;
		}
		if (key === "status") {
			editable = null;
		}
		if (key === "avtar") {
			editable = null;
		}
		if (key === "vendor") {
			editable = null;
		}
		if (key === "order_status") {
			editable = null;
		}

		columns.push({
			name: <b>{Capitalize(key.toString())}</b>,
			header: <b>{Capitalize(key.toString())}</b>,
			selector: row => row[key],
			Cell: editable,
			style: {
				textAlign: "center",
			},
		});
	}

	if (multiSelectOption === true) {
		columns.push({
			name: (
				<button
					className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
					onClick={(e) => {
						if (window.confirm("Are you sure you wish to delete this item?"))
							handleRemoveRow();
					}}
				>
					Delete
				</button>
			),
			id: "delete",
			accessor: (str) => "delete",
			cell: (row) => (
				<div>
					<span>
						<input
							type="checkbox"
							name={row.id}
							defaultChecked={checkedValues.includes(row.id)}
							onChange={(e) => selectRow(e, row.id)}
						/>
					</span>
				</div>
			),
			style: {
				textAlign: "center",
			},
			sortable: false,
		});
	} else {
		columns.push({
			name: <b>Action</b>,
			id: "delete",
			accessor: (str) => "delete",
			cell: (row, index) => (
				<div>
					<span onClick={() => handleDelete(index)}>
						<i
							className="fa fa-trash"
							style={{
								width: 35,
								fontSize: 20,
								padding: 11,
								color: "#e4566e",
							}}
						></i>
					</span>

					<span>
						<i
							onClick={() => onOpenModal(index)}
							className="fa fa-pencil"
							style={{
								width: 35,
								fontSize: 20,
								padding: 11,
								color: "rgb(40, 167, 69)",
							}}
						></i>
						{
							productTableType > 1 ?
								<Modal
									isOpen={open}
									toggle={onCloseModal}
									style={{ overlay: { opacity: 0.1 } }}
								>
									<ModalHeader toggle={onCloseModal}>
										<h5 className="modal-title f-w-600" id="exampleModalLabel2">
											Edit Product
										</h5>
									</ModalHeader>
									<ModalBody>
										<Form>
											<FormGroup>
												<Label htmlFor="recipient-name" className="col-form-label">
													Category Name :
												</Label>
												<Input type="text" className="form-control" />
											</FormGroup>
											<FormGroup>
												<Label htmlFor="message-text" className="col-form-label">
													Category Image :
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
											Update
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
							:
								<Modal
									isOpen={open}
									toggle={onCloseModal}
									style={{ overlay: { opacity: 0.1 } }}
								>
									<ModalHeader toggle={onCloseModal}>
										<h5 className="modal-title f-w-600" id="exampleModalLabel2">
											Edit Category
										</h5>
									</ModalHeader>
									<ModalBody>
										<Form>
											<FormGroup>
												<Label htmlFor="recipient-name" className="col-form-label">
													Category Name :
												</Label>
												<Input type="text" className={nameError ? 'form-control input-error' : 'form-control'}
													value={name} onChange={changeName} />
											</FormGroup>
											<FormGroup>
												<Label htmlFor="message-text" className="col-form-label">
													Category Image :
												</Label>
												<Input
													className="form-control"
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
											onClick={update}
										>
											Update
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
						}
					</span>
				</div>
			),
			style: {
				textAlign: "center",
			},
			sortable: false,
		});
	}

	React.useEffect(() => {
		setData(myData);
	}, [myData]);
	
	return (
		<div>
			<Fragment>
				<DataTable
					data={data}
					columns={columns}
					className={myClass}
					pagination={pagination}
					striped={true}
					center={true}
				/>

				<ToastContainer />
			</Fragment>
		</div>
	);
};

export default Datatable;
