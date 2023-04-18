import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/sales-transactions";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Transactions_sales = () => {
	return (
		<Fragment>
			<Breadcrumb title="Transactions" parent="Sales" />

			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Transaction Details</h5>
							</CardHeader>
							<CardBody>
								<div id="batchDelete" className="transactions">
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={10}
										pagination={true}
										class="-striped -highlight"
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Transactions_sales;
