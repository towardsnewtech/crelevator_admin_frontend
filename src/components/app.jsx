import React, { useState } from "react";
import Sidebar from "./common/sidebar_components/sidebar";
import RightSidebar from "./common/right-sidebar";
import Footer from "./common/footer";
import Header from "./common/header_components/header";
import { Outlet } from "react-router-dom";

const App = (props) => {
	const initialState = {
		ltr: true,
		divName: "RTL",
	};

	const [side, setSide] = useState(initialState);
	const isAuthenticated = localStorage.getItem('crelevator_admin_token') !== null ? true : false;

	const ChangeRtl = (divName) => {
		if (divName === "RTL") {
			document.body.classList.add("rtl");
			setSide({ divName: "LTR" });
		} else {
			document.body.classList.remove("rtl");
			setSide({ divName: "RTL" });
		}
	};
	return (
		<div>
			{
				isAuthenticated ?
					<div className="page-wrapper">
						<Header />
						<div className="page-body-wrapper">
							<Sidebar />
							<RightSidebar />
							<div className="page-body"><Outlet/></div>
							<Footer />
						</div>
					</div>
				:
					<div className="page-wrapper">
						<div className="page-body-wrapper">
							<div className="page-body"><Outlet/></div>
						</div>
					</div>
			}
			{/* <div
				className="btn-light custom-theme"
				onClick={() => ChangeRtl(side.divName)}
			>
				{side.divName}
			</div> */}
		</div>
	);
};
export default App;
