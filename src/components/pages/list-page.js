import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listPages";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const ListPages = () => {
	return (
		<Fragment>
			<Breadcrumb title="List Pages" parent="Pages" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Products Category</h5>
							</CardHeader>
							<CardBody>
								<div
									id="batchDelete"
									className="category-table order-table coupon-list-delete"
								>
									<Datatable
										multiSelectOption={true}
										myData={data}
										pageSize={7}
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

export default ListPages;
