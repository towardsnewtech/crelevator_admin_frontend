import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../common/breadcrumb";
import Datatable from "../common/datatable";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import { getAllUsers } from '../../actions';

const List_user = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getAllUsers().then(res => {
			if(res.success) {
				let temp = [];
				res.users.forEach((user, index) => {
					temp.push({
						id: user.id,
						f_name: user.first_name,
						l_name: user.last_name,
						email: user.email,
					});
				});
				setData(temp);
			}
		});
	}, []);

	return (
		<Fragment>
			<Breadcrumb title="User List" parent="Users" />
			<Container fluid={true}>
				<Card>
					<CardHeader>
						<h5>User Details</h5>
					</CardHeader>
					<CardBody>
						<div className="btn-popup pull-right">
							<Link to="/users/create-user" className="btn btn-secondary">
								Create User
							</Link>
						</div>
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
								userTable={true}
							/>
						</div>
					</CardBody>
				</Card>
			</Container>
		</Fragment>
	);
};

export default List_user;
