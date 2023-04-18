import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/orders";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Orders = () => {
	return (
		<Fragment>
			<Breadcrumb title="Orders" parent="Sales" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Manage Order</h5>
							</CardHeader>
							<CardBody className="order-datatable">
								<Datatable
									multiSelectOption={false}
									myData={data}
									pageSize={10}
									pagination={true}
									class="-striped -highlight"
								/>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Orders;
