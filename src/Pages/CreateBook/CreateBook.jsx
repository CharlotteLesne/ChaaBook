import React, { useState } from "react";
import style from "./CreateBook.module.css";
import Stars from "../../Components/Stars";
import Backbutton from "../../Components/Backbutton";

const CreateBook = () => {
	const [rating, setRating] = useState(0);

	return (
		<div>
			<Backbutton text="Retour" />

			<div className={style.wrapper}>
				<h1 className={style.title}>Nouveau livre</h1>
				<form
					className={style.form}
					onSubmit={(event) => {
						event.preventDefault();
						console.log(
							event.currentTarget.titre.value,
							event.currentTarget.auteur.value,
							event.currentTarget.genre.value,
							event.currentTarget.resume.value,
							rating,
							event.currentTarget.avis.value
						);
					}}
				>
					<div className={style.inputWrapper}>
						<input
							className={style.input}
							type="text"
							name="titre"
							placeholder="Titre"
							required
						></input>
						<input
							className={style.input}
							type="text"
							name="auteur"
							placeholder="Auteur"
							required
						></input>
						<select className={style.selector} name="genre" required>
							<option value="" disabled selected>
								Genre
							</option>
							<option value="Conte">Conte</option>
							<option value="Fantaisie">Fantaisie</option>
							<option value="Amour">Amour</option>
							<option value="Policier">Policier</option>
						</select>
					</div>
					<textarea
						className={style.textarea}
						name="resume"
						placeholder="Résumé"
					></textarea>
					<Stars rating={rating} onChange={(value) => setRating(value)} />
					<textarea
						className={style.textarea}
						name="avis"
						placeholder="Avis"
					></textarea>

					<button className={style.sendButton} type="submit">
						Envoyer
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateBook;
