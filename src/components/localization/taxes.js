import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/taxes";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Taxes = () => {
	return (
		<Fragment>
			<Breadcrumb title="Taxes" parent="Localization" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Tax Details</h5>
							</CardHeader>
							<CardBody>
								<div
									id="basicScenario"
									className="product-list translation-list"
								>
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={6}
										pagination={false}
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

export default Taxes;
