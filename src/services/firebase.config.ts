// All firebase services may import this file to get the firebase app instance.

// API key for Firebase - info and restrictions: https://firebase.google.com/docs/projects/api-keys?hl=en#apply-restrictions
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import firebase from 'firebase/compat/app';
const env = import.meta.env
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Replace the following with your app's Firebase project configuration for production
const firebaseConfig = {
	apiKey: env.DEV ? env.VITE_APP_FIREBASE_API_KEY : null,
	authDomain: 'makom-ledaber.firebaseapp.com',
	projectId: env.DEV ? env.VITE_APP_FIREBASE_PROJECT_ID : null,
	storageBucket: 'makom-ledaber.appspot.com',
	messagingSenderId: '522293934579',
	appId: env.DEV ? env.VITE_APP_FIREBASE_APP_ID : null,
	measurementId: 'G-W40NJRL31D',
};

// Get firebase app instance (get exist or initialize firebase)
export const app =
	firebase.apps.length > 0 ? firebase.apps[0] : initializeApp(firebaseConfig);
