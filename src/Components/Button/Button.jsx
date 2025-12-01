import React from "react";
import style from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({ to, text, className }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(to);
	};
	return (
		<button className={`${style.btn} ${className}`} onClick={handleClick}>
			{text}
		</button>
	);
};

export default Button;
