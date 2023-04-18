import React, { Fragment } from "react";
import TabsetUser from "../users/tabset-user";
import Breadcrumb from "../common/breadcrumb";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Create_vendors = () => {
	return (
		<Fragment>
			<Breadcrumb title="Create Vendor" parent="Vendors" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5> Add Vendor</h5>
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

export default Create_vendors;
