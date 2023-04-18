import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../common/breadcrumb";
import TabsetUser from "./tabset-user";

const Create_user = () => {
	return (
		<Fragment>
			<Breadcrumb title="Create User" parent="Users" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5> Add User</h5>
							</CardHeader>
							<CardBody>
								<TabsetUser />
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Create_user;
