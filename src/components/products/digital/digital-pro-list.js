import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/pro_list";
import Datatable from "../../common/datatable";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { getProductList } from "../../../actions";
import { SERVER_URL } from "../../../config";
import MDEditor from "@uiw/react-md-editor";
import CreateMarkUp from "../../common/CreateMarkUp";

const Digital_pro_list = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getProductList().then(res => {
			let temp = [];

			res.products.map((product, index) => {
				temp.push({
					...product,
					image : <img alt="" src={`${SERVER_URL + '\\images\\products\\' + product.image}`} style={{width:50, height:50}}/>,
					availability : <CreateMarkUp description={product.availability} />,
					features : <CreateMarkUp description={product.features} />,
					specifications : <CreateMarkUp description={product.specifications} />
				})
			})

			setData(temp);
		})
	}, []);

	return (
		<Fragment>
			<Breadcrumb title="Product List" parent="Digital" />
			{/* <!-- Container-fluid starts--> */}
			<Container fluid="true">
				<Row>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Product Lists</h5>
							</CardHeader>
							<CardBody>
								<div className="clearfix"></div>
								<div id="basicScenario" className="product-physical products-list">
									<Datatable
										multiSelectOption={false}
										myData={data}
										pageSize={9}
										pagination={false}
										class="-striped -highlight"
										productTableType={2}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
			{/* <!-- Container-fluid Ends--> */}
		</Fragment>
	);
};

export default Digital_pro_list;
