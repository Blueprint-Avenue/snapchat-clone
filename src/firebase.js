import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCiES2aOE9ZB144_e0L-1Q0hZUt1Wo6vio",
	authDomain: "snapchat-clone-b4fdb.firebaseapp.com",
	projectId: "snapchat-clone-b4fdb",
	storageBucket: "snapchat-clone-b4fdb.appspot.com",
	messagingSenderId: "466538444967",
	appId: "1:466538444967:web:41bd6cf578b068c5c8c382",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
