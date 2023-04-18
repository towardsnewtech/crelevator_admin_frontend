import React, { Fragment } from "react";
import Breadcrumb from "../../common/breadcrumb";
import data from "../../../assets/data/physical_list";
import { Edit, Trash2 } from "react-feather";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

const Product_list = () => {
	return (
		<Fragment>
			<Breadcrumb title="Product List" parent="Physical" />
			<Container fluid={true}>
				<Row className="products-admin ratio_asos">
					{data.map((myData, i) => {
						return (
							<Col xl="3" sm="6" key={i}>
								<Card>
									<div className="products-admin">
										<CardBody className="product-box">
											<div className="img-wrapper">
												<div className="lable-block">
													{myData.tag === "new" ? (
														<span className="lable3">{myData.tag}</span>
													) : (
														""
													)}
													{myData.discount === "on sale" ? (
														<span className="lable4">{myData.discount}</span>
													) : (
														""
													)}
												</div>
												<div className="front">
													<a href="/#" className="bg-size">
														<img
															alt=""
															className="img-fluid blur-up bg-img lazyloaded"
															src={myData.image}
														/>
													</a>
													<div className="product-hover">
														<ul>
															<li>
																<Button color="btn" type="button">
																	<Edit className="editBtn" />
																</Button>
															</li>
															<li>
																<Button color="btn" type="button">
																	<Trash2 className="deleteBtn" />
																</Button>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="product-detail">
												<div className="rating">
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>
												<a href="/#">
													{" "}
													<h6>{myData.title}</h6>
												</a>
												<h4>
													{myData.price} <del>{myData.discount_price}</del>
												</h4>
												<ul className="color-variant">
													<li className="bg-light0"></li>
													<li className="bg-light1"></li>
													<li className="bg-light2"></li>
												</ul>
											</div>
										</CardBody>
									</div>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</Fragment>
	);
};

export default Product_list;
