import React from "react";

const Image = ({ data }) => {
	return (
		<div>
			<div className="d-flex">
				{data.map((res, i) => {
					return (
						<img
							src={res}
							alt=""
							key={i}
							className="img-fluid img-30 me-2 blur-up lazyloaded"
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Image;
