import { push, ref, set } from "firebase/database";
import { database } from "../../../Firebase.config.js";

const saveBook = async (title, author, genre, resume, stars, avis) => {
	const booksRef = ref(database, "books");
	const newBooksRef = push(booksRef);
	const booksData = {
		title: title,
		author: author,
		genre: genre,
		resume: resume,
		stars: stars,
		avis: avis,
	};
	await set(newBooksRef, booksData);
};

export default saveBook;
