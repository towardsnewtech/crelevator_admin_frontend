import React from "react";
import Breadcrumb from "../common/breadcrumb";
import { Line, Bar } from "react-chartjs-2";
import {
	lineChart,
	chartOptions,
	areaChart,
	areaOptions,
	barOptions,
	barChart,
	sellOption,
	sellData,
	salesOption,
	salesData,
} from "../../constants/chartData";
import ReportTable from "./report-table";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Reports = () => {
	return (
		<div>
			<Breadcrumb title="Reports" parent="Reports" />
			<Container fluid={true}>
				<Row>
					<Col xl="8" md="6">
						<Card>
							<CardHeader>
								<h5>Sales Summary</h5>
							</CardHeader>
							<CardBody className="sell-graph">
								<Line
									data={salesData}
									options={salesOption}
									width={700}
									height={305}
								/>
							</CardBody>
						</Card>
					</Col>
					<Col xl="4" md="6">
						<Card className="report-employee">
							<CardHeader>
								<h2>75%</h2>
								<h6 className="mb-0">Employees Satisfied</h6>
							</CardHeader>
							<CardBody className="p-0">
								<div className="ct-4 flot-chart-container">
									<Line
										data={lineChart}
										options={chartOptions}
										width={778}
										height={500}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col sm="12">
						<Card>
							<CardHeader>
								<h5>Transfer Report</h5>
							</CardHeader>
							<CardBody>
								<div id="basicScenario" className="report-table">
									<ReportTable />
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6">
						<Card>
							<CardHeader>
								<h5>Expenses</h5>
							</CardHeader>
							<CardBody className="expense-chart">
								<div className="chart-overflow" id="area-chart1">
									<Line
										data={areaChart}
										options={areaOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col lg="6">
						<Card>
							<CardHeader>
								<h5> Sales / Purchase</h5>
							</CardHeader>
							<CardBody>
								<div className="sales-chart">
									<Bar
										data={barChart}
										options={barOptions}
										width={778}
										height={308}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
				<Col sm="12">
					<Card>
						<CardHeader>
							<h5> Sales / Purchase Return</h5>
						</CardHeader>
						<CardBody>
							<div className="report-last-sm">
								<Line
									data={sellData}
									options={sellOption}
									width={700}
									height={300}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Container>
		</div>
	);
};

export default Reports;
