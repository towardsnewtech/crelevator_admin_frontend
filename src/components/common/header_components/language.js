import React, { Fragment } from "react";

const Language = () => {
	return (
		<Fragment>
			<ul className="language-dropdown onhover-show-div p-20">
				<li>
					<a href="#javaScript" data-lng="en">
						<i className="flag-icon flag-icon-is"></i> English
					</a>
				</li>
				<li>
					<a href="#javaScript" data-lng="es">
						<i className="flag-icon flag-icon-um"></i> Spanish
					</a>
				</li>
				<li>
					<a href="#javaScript" data-lng="pt">
						<i className="flag-icon flag-icon-uy"></i> Portuguese
					</a>
				</li>
				<li>
					<a href="#javaScript" data-lng="fr">
						<i className="flag-icon flag-icon-nz"></i> French
					</a>
				</li>
			</ul>
		</Fragment>
	);
};

export default Language;
