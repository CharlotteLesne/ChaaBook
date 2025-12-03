import { ref, remove } from "firebase/database";
import { database } from "../../../Firebase.config";

const delateBook = async (id) => {
	try {
		const bookRef = ref(database, `books/${id}`);
		await remove(bookRef);
		console.log("Livre supprimé !");
	} catch (error) {
		console.error("Erreur lors de la suppression :", error);
	}
};
export default delateBook;
