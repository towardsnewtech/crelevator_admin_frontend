import React, { Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { User, Unlock } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { forgotPassword } from "../../actions";

const ForgotPassword = (props) => {
    const {
        setFlag
    } = props;
    const history = useNavigate();
    const [email, setEmail] = React.useState("");
    const [phonenumber, setPhonenumber] = React.useState("");

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePhonenumber = (e) => {
        setPhonenumber(e.target.value);
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

    const resetPassword = () => {
        const data = {
            email: email,
            phonenumber: phonenumber,
        };

        console.log(data)

        forgotPassword(data).then(res => {
            if (res) {
                if (res.success) {
                    notify("Password Update to 111 Successfully!", true);
                } else {
                    notify(res.msg, false);
                }
            }
        })
    };

    return (
        <div>
            <Fragment>
                <div>
                    <p style={{ fontSize: 32, fontWeight: 600, display: 'flex', justifyContent: 'center', color: 'black' }}>Forgot Password</p>
                    <p style={{ color: 'black', fontSize: '14.5px' }}>Enter both, (your email address and phone number) register to your account and we will send you a link to reset your password.</p>
                </div>
                <Form className="form-horizontal auth-form">
                    <FormGroup>
                        <Input
                            required=""
                            name="login[username]"
                            type="email"
                            className="form-control"
                            placeholder="your@email"
                            id="exampleInputEmail1"
                            onChange={changeEmail}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            required=""
                            name="login[phonenumber]"
                            type="phonenumber"
                            className="form-control"
                            placeholder="your phone number"
                            onChange={changePhonenumber}
                        />
                    </FormGroup>
                    <div className="form-button" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            color="primary"
                            onClick={() => resetPassword()}
                        >
                            RESET PASSWORD
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => setFlag(1)}
                        >
                            BACK
                        </Button>
                    </div>
                </Form>
            </Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </div>
    );
};

export default ForgotPassword;
