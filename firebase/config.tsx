import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from '@firebase/storage'

export const firebaseConfig = {
    apiKey: "AIzaSyDT2DqZbf1pGKVCGocOGQvs44P5n2iuZdA",
    authDomain: "flowers-ua.firebaseapp.com",
    projectId: "flowers-ua",
    storageBucket: "flowers-ua.appspot.com",
    messagingSenderId: "365700770094",
    appId: "1:365700770094:web:2048f3c9d0f3ff72d2f2bf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

export const storage = getStorage(app)

export default app

