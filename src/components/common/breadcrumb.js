import React from "react";
import { Home } from "react-feather";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Breadcrumb = ({title,parent}) => {
	return (
		<Container fluid={true}>
			<div className="page-header">
				<Row>
					<Col lg="6">
						<div className="page-header-left">
							<h3>
								{title}
								<small>CRElevator Admin panel</small>
							</h3>
						</div>
					</Col>
					<Col lg="6">
						<ol className="breadcrumb pull-right">
							<li className="breadcrumb-item">
								<Link to="mutikart-admin/dashboard">
									<Home />
								</Link>
							</li>
							<li className="breadcrumb-item">{parent}</li>
							<li className="breadcrumb-item active">{title}</li>
						</ol>
					</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Breadcrumb;
