import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import data from "../../assets/data/listVendor";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const List_vendors = () => {
	return (
		<Fragment>
			<Breadcrumb title="Vendor List" parent="Vendors" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>Vendor Details</h5>
					</CardHeader>
					<CardBody>
						<div className="clearfix"></div>
						<div
							id="batchDelete"
							className="category-table user-list order-table coupon-list-delete"
						>
							<Datatable
								multiSelectOption={true}
								myData={data}
								pageSize={10}
								pagination={true}
								class="-striped -highlight"
							/>
						</div>
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default List_vendors;
