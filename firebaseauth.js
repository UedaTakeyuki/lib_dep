import firebase from "@firebase/app";
import "@firebase/auth";


function firebasefunc() {
	firebase.auth().onAuthStateChanged((user) => {
		console.log(user.uid)
	});
}

export { firebasefunc };

