import React, { useEffect, useState } from "react";
import style from "./Bookpages.module.css";
import Backbutton from "../../Components/Backbutton";
import Nextbutton from "../../Components/Nextbutton";
import { useNavigate, useParams } from "react-router";
import fetchBooks from "./queries/fetchBooks";
import Stars from "../../Components/Stars";
import Button from "../../Components/Button";
import delateBook from "./queries/delateBook";

const Book = ({ id, title, author, genre, stars, resume, avis }) => {
	const navigate = useNavigate();
	return (
		<div className={style.wrapper}>
			<Button
				onClick={() =>
					delateBook(id).then(() => {
						navigate("/");
					})
				}
				text="Supprimer"
			/>
			<h1>{title}</h1>
			<h2>{author}</h2>
			<p>{genre}</p>
			<Stars rating={stars} />
			<p className={style.paragraphe}>{resume}</p>
			<p>{avis}</p>
		</div>
	);
};

const Bookpages = () => {
	const [books, setBooks] = useState([]);
	const { page } = useParams();
	const currentPage = Number(page);
	const previousPage = currentPage - 1;
	const nextPage = currentPage + 1;

	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage >= books.length;

	useEffect(() => {
		fetchBooks().then((values) => {
			setBooks(values);
		});
	}, []);

	if (books.length === 0) {
		return (
			<div>Vous n'avez pas encore de livre, vous pouvez allez en créez un</div>
		);
	}

	return (
		<>
			<Book {...books[page - 1]} />
			{isFirstPage ? (
				<Backbutton text="Accueil" to="/" />
			) : (
				<Backbutton text="Précédent" to={`/bookpages/${previousPage}`} />
			)}
			{!isLastPage && (
				<Nextbutton text="Suivant" to={`/bookpages/${nextPage}`} />
			)}
		</>
	);
};

export default Bookpages;
