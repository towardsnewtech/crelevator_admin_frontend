import React, { Fragment, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import Datatable from "../common/datatable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Modal, Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import {
	addNews,
	getNews
} from '../../actions';
import { SERVER_URL } from "../../config";

const News = () => {
    const [data, setData] = React.useState([]);
	const [open, setOpen] = useState(false);
	const [title, setTitle] = React.useState("");
	const [titleError, setTitleError] = React.useState(false);
    const [content, setContent] = React.useState("");
	
	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setTitle("");
        setContent("");
		setOpen(false);
		setTitleError(false);
	};

	const changeTitle = (e) => {
		setTitle(e.target.value);
	};

    const changeContent = (e) => {
        setContent(e.target.value);
    }

	const onSave = () => {
		if(title === "") {
			setTitleError(true);
			return;
		}

		const dataT = {
			title: title,
            content: content
		};
		addNews(dataT).then(res => {
			let temp = [...data];
			temp.push({
				id: res.id,
				title: title,
				content: content
			});
			setData(temp);
			toast.success("Successfully Added!");
			onCloseModal();
		});
	};

	React.useEffect(() => {
		getNews().then(res => {
			let temp = [];
			res.news.forEach(news => {
				temp.push({
					id: news.id,
					title: news.title,
					content: news.content
				});
			});
			setData(temp);
		});
	}, []);

    return (
        <Fragment>
            <Breadcrumb title="News" parent="Extras" />
            {/* <!-- Container-fluid starts--> */}
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>News</h5>
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
                                        Add news
                                    </Button>
                                    <Modal isOpen={open} toggle={onCloseModal}>
                                        <ModalHeader toggle={onCloseModal}>
                                            <h5
                                                className="modal-title f-w-600"
                                                id="exampleModalLabel2"
                                            >
                                                Add News
                                            </h5>
                                        </ModalHeader>
                                        <ModalBody>
                                            <Form>
                                                <FormGroup>
                                                    <Label
                                                        htmlFor="recipient-name"
                                                        className="col-form-label"
                                                    >
                                                        Title :
                                                    </Label>
                                                    <Input type="text" className={titleError ? 'form-control input-error' : 'form-control'} value={title}
                                                        onChange={changeTitle} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label
                                                        htmlFor="message-text"
                                                        className="col-form-label"
                                                    >
                                                        Content :
                                                    </Label>
                                                    <textarea rows={5} type="text" className={titleError ? 'form-control input-error' : 'form-control'} value={content}
                                                        onChange={changeContent} />
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
                                        productTableType={5}
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

export default News;