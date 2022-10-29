//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle


//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

window.onload = () => {
	let seconds = 0;
	setInterval(() => {
		ReactDOM.render(
			<Home seconds={seconds} />,
			document.querySelector("#app")
		);
		seconds++;
	}, 1000);
};

//ReactDOM.render(<Home />, document.querySelector("#app"));

//105 - [(105 - (105%10))]/10 - [105-(105%100)/100]
