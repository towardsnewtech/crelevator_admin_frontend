import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, CardHeader, Container, Row, Col, Label, FormGroup, Form, Input } from "reactstrap";
import { UpdateEmailInfo, LoadEmailInfo, LoadSMTPInfo } from '../../actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailJsSMTP = () => {
    const [type, setType] = useState();
    const [emailInfo, setEmailInfo] = useState({});

    const handleChange = (e) => {
        if (e.target.id == 'smtp')
            setType(1) ;
        else setType(0) ;

        if (e.target.id == 'smtp') {
            LoadSMTPInfo().then(res => {
                setEmailInfo({
                    ...emailInfo,
                    name: res.data.name,
                    email: res.data.email,
                    emailuser: res.data.emailuser,
                    emailserver: res.data.emailserver,
                    type: e.target.id == 'smtp'
                })
            })
        } else {
            setEmailInfo({
                type: e.target.id == 'smtp'
            })
        }
    }

    const handleValueChange = (e) => {
        setEmailInfo({
            ...emailInfo,
            [e.target.name]: e.target.value,
            type: true
        })
    }

    const handleUpdate = () => {
        UpdateEmailInfo(emailInfo).then((res) => {
            notify("Save Successfully!", true)
        }).catch(err => {
            console.log(err)
        })
    }

    const notify = (text, success) => {
		const options = {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		};
		if (success) {
			toast.success(text, options);
		} else {
			toast.warn(text, options);
		}
	};

    React.useEffect(() => {
        LoadEmailInfo().then(res => {
            setType(res.data.type);
            setEmailInfo({
                name: res.data.name,
                email: res.data.email,
                emailuser: res.data.emailuser,
                emailserver: res.data.emailserver
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <Fragment>
            <Breadcrumb title="EmailJs or SMPT Settings" parent="Users" />
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <h5>Settings for Email</h5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm="3">
                                <FormGroup>
                                    <Form>
                                        <input type='radio' id="emailjs" name="email" onChange={handleChange} checked={type == 0} />
                                        <Label htmlFor="emailjs">&nbsp;&nbsp;EmailJs</Label> <br /> <br />
                                        <input type='radio' id="smtp" name="email" onChange={handleChange} checked={type == 1} />
                                        <Label htmlFor="smtp">&nbsp;&nbsp;SMTP</Label>
                                    </Form>
                                </FormGroup>
                            </Col>
                            {type == 1 && <Col sm="9">
                                <FormGroup>
                                    <Label className="col-form-label pt-0">
                                        <span>*</span> Your name
                                    </Label>
                                    <Input
                                        className="form-control"
                                        id="validationCustom01"
                                        type="text"
                                        required=""
                                        placeholder="Full Name or Display Name"
                                        name="name"
                                        value={emailInfo.name || ""}
                                        onChange={handleValueChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="col-form-label pt-0">
                                        <span>*</span> Your full email address
                                    </Label>
                                    <Input
                                        className="form-control"
                                        id="validationCustom01"
                                        type="text"
                                        required=""
                                        placeholder="Account Name, User name, or Email address"
                                        name="email"
                                        value={emailInfo.email || ""}
                                        onChange={handleValueChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="col-form-label pt-0">
                                        <span>*</span> Your Gmail password
                                    </Label>
                                    <Input
                                        className="form-control"
                                        id="validationCustom01"
                                        type="password"
                                        required=""
                                        placeholder="Password"
                                        name="password"
                                        value={emailInfo.password || ""}
                                        onChange={handleValueChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="col-form-label pt-0">
                                        <span>*</span> Your Gmail Server
                                    </Label>
                                    <Input
                                        className="form-control"
                                        id="validationCustom01"
                                        type="text"
                                        required=""
                                        placeholder="Email Server"
                                        name="emailserver"
                                        value={emailInfo.emailserver || ""}
                                        onChange={handleValueChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="col-form-label pt-0">
                                        <span>*</span> Your Gmail User
                                    </Label>
                                    <Input
                                        className="form-control"
                                        id="validationCustom01"
                                        type="text"
                                        required=""
                                        placeholder="Email User"
                                        name="emailuser"
                                        value={emailInfo.emailuser || ""}
                                        onChange={handleValueChange}
                                    />
                                </FormGroup>
                            </Col>
                        }
                        </Row>
                        <div className="btn-popup pull-right" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '3rem' }}>
                            <div className="btn btn-secondary" onClick={handleUpdate}>
                                Save
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
            <ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<ToastContainer />
        </Fragment>
    );
};

export default EmailJsSMTP;
