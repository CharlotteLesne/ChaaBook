import React from "react";
import style from "./Homepage.module.css";
import Button from "../../Components/Button";


const Homepage = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.titleBackground}>
				<h1 className={style.title}>ChaaBook</h1>
			</div>

			<Button
				text="Suivant"
				to="/bookpages/1"
				className={style.bookpageButton}
			/>
			<Button text="Creation" to="/create" className={style.createButton} />
		</div>
	);
};

export default Homepage;
