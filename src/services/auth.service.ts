import { User, getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { app } from './firebase.config';
import { LocalAuth } from 'models/auth.model';
// FirebaseUI - see https://github.com/firebase/firebaseui-web
import * as firebaseui from 'firebaseui';

const auth = getAuth(app);

// FirebaseUI config.
const uiConfig: firebaseui.auth.Config = {
	signInOptions: [
		// Leave the lines as is for the providers you want to offer your users.
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
		// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
		// firebase.auth.TwitterAuthProvider.PROVIDER_ID,
		// firebase.auth.GithubAuthProvider.PROVIDER_ID,
		// firebase.auth.EmailAuthProvider.PROVIDER_ID,
		// firebase.auth.PhoneAuthProvider.PROVIDER_ID,
		// firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
	],
	tosUrl: '/term-of-service',
	privacyPolicyUrl: '/privacy-policy',
	signInFlow: 'popup',
	callbacks: {
		signInSuccessWithAuthResult: () => false, // Avoid redirects after sign-in.
	},
};

// Authentication Initialize the FirebaseUI Widget using Firebase.

const firebaseUI = new firebaseui.auth.AuthUI(auth);

// The start method should be invoked after the DOM element is rendered.
const loadFirebaseUI = (elementId: string) => {
	firebaseUI.start(`#${elementId}`, uiConfig);
};

export const initFirebaseAuth = (
	onAuthStateChanged: (user: User | null) => void
): LocalAuth => {
	auth.onAuthStateChanged((user) => {
		onAuthStateChanged(user);
	});

	return {
		currentUser: auth.currentUser,
		signOut: () => auth.signOut(),
		loadFirebaseUI,
	};
};
