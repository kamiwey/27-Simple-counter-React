import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonClass, text, setIsActive, isActive }) => {
	return (
		<button
			type="button"
			className={`btn ${buttonClass} mx-2`}
			onClick={() => setIsActive(!isActive)}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	buttonClass: PropTypes.string,
	setIsActive: PropTypes.func,
	isActive: PropTypes.bool
};

export default Button;
