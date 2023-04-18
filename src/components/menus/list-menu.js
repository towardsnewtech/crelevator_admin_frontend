import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listMenu";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const List_menu = () => {
	return (
		<Fragment>
			<Breadcrumb title="List Menu" parent="Menu" />
			<Container fluid={true}>
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Menu Lists</h5>
							</CardHeader>
							<CardBody>
								<div
									id="batchDelete"
									className="category-table order-table coupon-list-delete"
								>
									<Datatable
										multiSelectOption={true}
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

export default List_menu;
