import React from "react";
import style from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({ to, text, className, onClick }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		if (to) {
			navigate(to);
		} else if(onClick){
			onClick();
		}
	};

	return (
		<button className={`${style.btn} ${className}`} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
