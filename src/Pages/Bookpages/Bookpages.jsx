import React from "react";
import style from "./Bookpages.module.css";
import Backbutton from "../../Components/Backbutton";
import Nextbutton from "../../Components/Nextbutton";
import { useParams } from "react-router";

const books = [
	{
		title: "Le Petit Prince",
		author: "Antoine de Saint-Exupéry",
		theme: "Conte",
		stars: "⭐⭐⭐⭐⭐",
		paragraphe:
			"Le Petit Prince raconte la rencontre entre un aviateur en panne dans le désert et un mystérieux enfant venu d’une autre planète. En voyageant de monde en monde, le petit prince observe les comportements des adultes, souvent absurdes ou vides de sens. Sur Terre, il découvre l’amitié grâce au renard, qui lui enseigne l’importance des liens et du cœur. L’histoire met en lumière la beauté de l’enfance, la fragilité des sentiments et la nécessité de voir avec le cœur plutôt qu’avec les yeux.",
		notice: "J'ai aimé ce livre car",
	},
	{
		title: "Harry Potter",
		author: "J.K. Rowling",
		theme: "Fantaisie",
		stars: "⭐⭐⭐⭐⭐",
		paragraphe: "Il etait une fois",
		notice: "J'ai aimé ce livre car",
	},
	{
		title: "Noël à la cerise",
		author: "Cynthia Kafka",
		theme: "Amour",
		stars: "⭐⭐⭐⭐⭐",
		paragraphe:
			"Le roman raconte l’histoire d’une jeune femme un peu perdue qui part travailler pendant l’hiver dans une station de montagne. Elle n’aime pas tellement la neige, se sentait mal à l’aise loin de son univers habituel — et en plus, elle doit vivre en colocation avec trois personnes : Tina, Enzo… et Ben, qui est à la fois séduisant et irritant. Sa sœur croit qu’elle a tout quitté : son mec, la fac… mais elle ne dit pas toute la vérité. En réalité, elle veut comprendre qui elle est vraiment. Et peut-être que, au milieu des pistes enneigées, l’amour l’attend… ",
		notice: "J'ai aimé ce livre car",
	},
];

const Book = ({ title, author, theme, stars, paragraphe, notice }) => {
	return (
		<div className={style.wrapper}>
			<h1>{title}</h1>
			<h2>{author}</h2>
			<p>{theme}</p>
			<p>{stars}</p>
			<p className={style.paragraphe}>{paragraphe}</p>
			<p>{notice}</p>
		</div>
	);
};

const Bookpages = () => {
	const { page } = useParams();
	const currentPage = Number(page);
	const previousPage = currentPage - 1;
	const nextPage = currentPage + 1;

	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === books.length;

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
