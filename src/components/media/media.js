import React, { Fragment } from "react";
import Breadcrumb from "../common/breadcrumb";
import MyDropzone from "../common/dropzone";
import Datatable from "../common/datatable";
import data from "../../assets/data/media";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const Media = () => {
	return (
		<Fragment>
			<Breadcrumb title="Media" parent="Media" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>Dropzone Media</h5>
					</CardHeader>
					<CardBody>
						<MyDropzone />
					</CardBody>
				</Card>
				<Card>
					<CardHeader>
						<h5>Media File List</h5>
					</CardHeader>
					<CardBody>
						<div
							id="batchDelete"
							className="category-table media-table coupon-list-delete"
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

export default Media;
