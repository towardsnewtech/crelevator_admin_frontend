import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/translations";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Translations = () => {
	return (
		<Fragment>
			<Breadcrumb title="Translations" parent="Localization" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Translations</h5>
							</CardHeader>
							<CardBody>
								<div
									id="basicScenario"
									className="product-list translation-list"
								>
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

export default Translations;
