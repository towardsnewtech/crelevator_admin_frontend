import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import Slider from "react-slick";
import "../../../assets/scss/slick.scss";
import "../../../assets/scss/slick-theme.scss";

import {Rating} from "react-simple-star-rating";

// image import
import two from "../../../assets/images/pro3/2.jpg";
import twentySeven from "../../../assets/images/pro3/27.jpg";
import one from "../../../assets/images/pro3/1.jpg";
import size_chart from "../../../assets/images/size-chart.jpg";
import {
	Button,
	Card,
	Col,
	Container,
	Row,
	Modal,
	ModalHeader,
} from "reactstrap";

const Product_detail = () => {
	const [open, setOpen] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [rating, setRating] = useState(1);
	const [nav, setNav] = useState({
		nav1: null,
		nav2: null,
	});
	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};
	const onStarClick = (nextValue) => {
		setRating(nextValue);
	};

	const IncrementItem = () => {
		if (quantity < 9) {
			setQuantity(quantity + 1);
		} else {
			return null;
		}
	};
	const DecreaseItem = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		} else {
			return null;
		}
	};
	const handleChange = (event) => {
		setQuantity(parseInt(event.target.value));
	};

	useEffect(() => {
		setNav({
			nav1: Slider.slider1,
			nav2: Slider.slider2,
		});
	}, []);

	return (
		<Fragment>
			<Breadcrumb title="Product Detail" parent="Physical" />

			<Container fluid={true}>
				<Card>
					<Row className="product-page-main card-body">
						<Col xl="4">
							<Slider
								asNavFor={nav.nav2}
								ref={(slider) => (Slider.slider1 = slider)}
								className="product-slider"
							>
								<div className="item">
									<img className="img-fluid" src={one} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={twentySeven} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={two} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={one} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={twentySeven} alt="" />
								</div>
							</Slider>

							<Slider
								asNavFor={nav.nav1}
								ref={(slider) => (Slider.slider2 = slider)}
								slidesToShow={4}
								swipeToSlide={true}
								focusOnSelect={true}
								className="small-slick"
							>
								<div className="item">
									<img className="img-fluid" src={one} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={twentySeven} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={two} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={twentySeven} alt="" />
								</div>
								<div className="item">
									<img className="img-fluid" src={one} alt="" />
								</div>
							</Slider>
						</Col>
						<Col xl="8">
							<div className="product-page-details product-right mb-0">
								<h2>WOMEN PINK SHIRT</h2>
								<div style={{ fontSize: 27, height: 31 }}>
									<Rating
										onClick={onStarClick}
										ratingValue={rating}
										size={25}
										stars={5}
										transition
										name="rate1"
										emptyColor="black"
									/>
								</div>
								<hr />
								<h6 className="product-title">product details</h6>
								<p>
									Sed ut perspiciatis, unde omnis iste natus error sit
									voluptatem accusantium doloremque laudantium, totam rem
									aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
									architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
									voluptatem,
								</p>
								<div className="product-price digits mt-2">
									<h3>
										$26.00 <del>$350.00</del>
									</h3>
								</div>
								<ul className="color-variant">
									<li className="bg-light0"></li>
									<li className="bg-light1"></li>
									<li className="bg-light2"></li>
								</ul>
								<hr />
								<h6 className="product-title size-text">
									select size
									<span className="pull-right">
										<a
											href="#javaScript"
											data-toggle="modal"
											data-target="#sizemodal"
											onClick={onOpenModal}
										>
											size chart
										</a>
									</span>
								</h6>
								<Modal className="size-modal" isOpen={open} toggle={onCloseModal}>
									<ModalHeader toggle={onCloseModal}>
										<img
											src={size_chart}
											alt=""
											className="img-fluid blur-up lazyloaded"
										/>
									</ModalHeader>
								</Modal>
								<div className="size-box">
									<ul>
										<li className="active">
											<a href="#javaScript">s</a>
										</li>
										<li>
											<a href="#javaScript">m</a>
										</li>
										<li>
											<a href="#javaScript">l</a>
										</li>
										<li>
											<a href="#javaScript">xl</a>
										</li>
									</ul>
								</div>
								<div className="add-product-form">
									<h6 className="product-title">quantity</h6>
									<fieldset className="qty-box mt-2 ms-0">
										<div className="input-group bootstrap-touchspin">
											<div className="input-group-prepend">
												<button
													className="btn btn-primary btn-square bootstrap-touchspin-down"
													type="button"
													onClick={DecreaseItem}
												>
													<i className="fa fa-minus"></i>
												</button>
											</div>
											<div className="input-group-prepend">
												<span className="input-group-text bootstrap-touchspin-prefix"></span>
											</div>
											<input
												className="touchspin form-control"
												type="text"
												value={quantity}
												onChange={(event) => handleChange(event)}
											/>
											<div className="input-group-append">
												<span className="input-group-text bootstrap-touchspin-postfix"></span>
											</div>
											<div className="input-group-append ms-0">
												<button
													className="btn btn-primary btn-square bootstrap-touchspin-up"
													type="button"
													onClick={IncrementItem}
												>
													<i className="fa fa-plus"></i>
												</button>
											</div>
										</div>
									</fieldset>
								</div>
								<hr />
								<h6 className="product-title">Time Reminder</h6>
								<div className="timer">
									<p id="demo">
										<span>
											25 <span className="padding-l">:</span>{" "}
											<span className="timer-cal">Days</span>{" "}
										</span>
										<span>
											22 <span className="padding-l">:</span>{" "}
											<span className="timer-cal">Hrs</span>{" "}
										</span>
										<span>
											13 <span className="padding-l">:</span>{" "}
											<span className="timer-cal">Min</span>{" "}
										</span>
										<span>
											57 <span className="timer-cal">Sec</span>
										</span>
									</p>
								</div>
								<div className="m-t-15">
									<Button color="primary" className="m-r-10" type="button">
										Add To Cart
									</Button>
									<Button color="secondary" type="button">
										Buy Now
									</Button>
								</div>
							</div>
						</Col>
					</Row>
				</Card>
			</Container>
		</Fragment>
	);
};

export default Product_detail;
