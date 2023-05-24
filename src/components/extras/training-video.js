import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import Datatable from "../common/datatable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import {
	addVideo,
	getVideos
} from '../../actions';
import { SERVER_URL } from "../../config";

const TrainingVideo = () => {
    const [data, setData] = React.useState([]);
	const [open, setOpen] = useState(false);
	const [name, setName] = React.useState("");
	const [nameError, setNameError] = React.useState(false);
    const [videoUrl, setVideoUrl] = React.useState("");
	
	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setName("");
		setOpen(false);
		setNameError(false);
	};

	const changeName = (e) => {
		setName(e.target.value);
	};

    const changeVideoUrl = (e) => {
        setVideoUrl(e.target.value);
    }

	const onSave = () => {
		if(name === "") {
			setNameError(true);
			return;
		}

		const dataT = {
			name: name,
            videourl: videoUrl
		};
		addVideo(dataT).then(res => {
			let temp = [...data];
			temp.push({
				id: res.id,
				name: name,
				video: <a href={`${videoUrl}`} target="_blank">view</a>
			});
			setData(temp);
			toast.success("Successfully Added!");
			onCloseModal();
		});
	};

	React.useEffect(() => {
		getVideos().then(res => {
			let temp = [];
			res.videos.forEach(video => {
				temp.push({
					id: video.id,
					name: video.name,
					video: <a href={`${video.videourl}`} target="_blank">view</a>
				});
			});
			setData(temp);
		});
	}, []);

    return (
        <Fragment>
            <Breadcrumb title="Training Videos" parent="Extras" />
            {/* <!-- Container-fluid starts--> */}
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Training Video</h5>
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
                                        Add video
                                    </Button>
                                    <Modal isOpen={open} toggle={onCloseModal}>
                                        <ModalHeader toggle={onCloseModal}>
                                            <h5
                                                className="modal-title f-w-600"
                                                id="exampleModalLabel2"
                                            >
                                                Add VIDEO
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
                                                        Video Url :
                                                    </Label>
                                                    <Input type="text" className={nameError ? 'form-control input-error' : 'form-control'} value={videoUrl}
                                                        onChange={changeVideoUrl} />
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
                                        productTableType={3}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default TrainingVideo;