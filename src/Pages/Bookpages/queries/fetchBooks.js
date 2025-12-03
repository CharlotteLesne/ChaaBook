import { get, query, ref } from "firebase/database";
import { database } from "../../../Firebase.config";

const fetchBooks = async () => {
	try {
		const booksRef = ref(database, "books");
		const booksQuery = query(booksRef);
		const snapshot = await get(booksQuery);
		if (snapshot.exists()) {
			const data = snapshot.val();
			return Object.keys(data).map((key) => ({
				id: key,
				...data[key],
			}));
		} else {
			return [];
		}
	} catch (error) {
		console.error("Erreur lors de la recupération du livre :", error);
	}
};
export default fetchBooks;
