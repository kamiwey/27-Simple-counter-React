import React from "react";
import { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";
import Button from "./button";

const Countdown = () => {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);


	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				if (seconds > 0) {
					setSeconds(prevState => prevState - 1);
				} else {
					alert("time finished");
					setIsActive(false);
				}
			}, 1000);
		} else if (!isActive) {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, seconds]);

	
	return (
		<div>

			<SecondsCounter seconds={seconds} />

			<div className="sets mt-5 text-center">
			<input
				className="mx-5 mb-5"
				type="text"
				id="secondsCountDown"
				placeholder="Enter seconds and press Start"
				onChange={e =>
					setSeconds(
						e.target.value.length == 0
							? ""
							: parseInt(e.target.value)
					)
				}></input>

			{!isActive && (
				<button
					type="button"
					className="btn btn-success mx-2"
					onClick={() => setIsActive(true)}>
					Start
				</button>
			)}
			{isActive && (
				<button
					type="button"
					className="btn btn-danger mx-2"
					onClick={() => setIsActive(false)}>
					Stop
				</button>
			)}
			{!isActive && (
				<button
					type="button"
					className="btn btn-primary mx-2"
					onClick={() => setIsActive(true)}>
					Resume
				</button>
			)}
			{!isActive && (
				<button
					type="button"
					className="btn btn-secondary mx-2"
					onClick={() => {
						setIsActive(false);
						setSeconds(0);
					}}>
					Reset
				</button>
			)}
			</div>
		</div>
	);
};

export default Countdown;
