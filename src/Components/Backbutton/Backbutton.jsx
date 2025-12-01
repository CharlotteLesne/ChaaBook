import React from "react";
import style from "./Backbutton.module.css";
import { useNavigate } from "react-router-dom";

const Backbutton = ({ to, text }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		if (to) {
			navigate(to);
		} else {
			navigate(-1);
		}
	};
	return (
		<button className={style.btn} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Backbutton;
