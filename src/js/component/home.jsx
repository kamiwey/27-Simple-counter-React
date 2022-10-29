import React from "react";
import PropTypes from "prop-types";
import SecondsCounter from "./SecondsCounter";
import Countdown from "./countdown";

//create your first component
const Home = props => {
	return (
		<div>
			{/* <h1 className="m-5">Timer</h1> */}
			<SecondsCounter seconds={props.seconds} />
			<h1 className="m-4 text-center">Countdown Timer</h1>
			<Countdown />
		</div>
	);
};

Home.propTypes = {
	seconds: PropTypes.number
};

export default Home;
