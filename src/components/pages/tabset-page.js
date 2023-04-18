import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Form, Input, Label } from "reactstrap";
import MDEditor from "@uiw/react-md-editor";

const TabsetPage = () => {
	const [value, setValue] = useState('')

	const onChange = (e) =>{
		setValue(e)
	}
	return (
		<Fragment>
			<div>
				<Tabs>
					<TabList className="nav nav-tabs tab-coupon">
						<Tab className="nav-link">General</Tab>
						<Tab className="nav-link">SEO</Tab>
					</TabList>

					<TabPanel>
						<Form className="needs-validation">
							<h4>General</h4>
							<div className="form-group row">
								<Label className="col-xl-3 col-md-4">
									<span>*</span> Name
								</Label>
								<div className="col-xl-8 col-md-7 p-0">
									<Input
										className="form-control"
										id="validationCustom0"
										type="text"
									/>
								</div>
							</div>
							<div className="form-group row editor-label">
								<Label className="col-xl-3 col-md-4">
									<span>*</span> Description
								</Label>
								<div className="col-xl-8 col-md-7 editor-space p-0">
								<MDEditor
									value={value}
									onChange={onChange}
								/>
								</div>
							</div>
							<div className="form-group row">
								<Label className="col-xl-3 col-md-4">Status</Label>
								<div className="col-xl-8 col-md-7 px-1">
									<Label className="d-block">
										<Input
											className="checkbox_animated"
											id="chk-ani1"
											type="checkbox"
										/>
										Enable the Coupon
									</Label>
								</div>
							</div>
						</Form>
					</TabPanel>
					<TabPanel>
						<Form className="needs-validation">
							<h4>SEO</h4>
							<div className="form-group row">
								<Label className="col-xl-3 col-md-4">Meta Title</Label>
								<div className="col-xl-8 col-md-7 p-0">
									<Input
										className="form-control"
										id="validationCustom2"
										type="text"
									/>
								</div>
							</div>
							<div className="form-group row editor-label">
								<Label className="col-xl-3 col-md-4">Meta Description</Label>
								<textarea rows="4" className="col-xl-8 col-md-7"></textarea>
							</div>
						</Form>
					</TabPanel>
				</Tabs>
				<div className="pull-right">
					<Button type="button" color="primary">
						Save
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default TabsetPage;
