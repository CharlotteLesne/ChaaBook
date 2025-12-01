import React from "react";
import style from "./Nextbutton.module.css";
import { useNavigate } from "react-router-dom";

const Nextbutton = ({ to, text }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(to);
	};
	return (
		<button className={style.btn} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Nextbutton;
