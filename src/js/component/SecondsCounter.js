import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = props => {
	let seconds = String(props.seconds);

	return (
		<div className="container">
		<div className="contador row  text-white mt-2 mx-5 text-center">
			<div className="col">
				<i className="far fa-clock"></i>
			</div>
			<div className="col place6">
				{seconds.length > 6 ? seconds[seconds.length - 7] : "0"}
			</div>
			<div className="col place5">
				{seconds.length > 5 ? seconds[seconds.length - 6] : "0"}
			</div>
			<div className="col place4">
				{seconds.length > 4 ? seconds[seconds.length - 5] : "0"}
			</div>
			<div className="col place3">
				{seconds.length > 3 ? seconds[seconds.length - 4] : "0"}
			</div>
			<div className="col place2">
				{seconds.length > 2 ? seconds[seconds.length - 3] : "0"}
			</div>
			<div className="col place1">
				{seconds.length > 1 ? seconds[seconds.length - 2] : "0"}
			</div>
			<div className="col place0">
				{seconds.length > 0 ? seconds[seconds.length - 1] : "0"}
			</div>
		</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
