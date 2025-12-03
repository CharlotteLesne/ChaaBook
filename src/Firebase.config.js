import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyD20f-As7ZGeQ_YM_PQbaUdYkOVln5i_Ec",
	authDomain: "chaabook-d044f.firebaseapp.com",
	databaseURL:
		"https://chaabook-d044f-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "chaabook-d044f",
	storageBucket: "chaabook-d044f.firebasestorage.app",
	messagingSenderId: "543773493248",
	appId: "1:543773493248:web:ed184539511a39c45b30e5",
};
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
