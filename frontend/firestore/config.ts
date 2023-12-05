// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMINIAN,
    projectId: "ch-music-5dd34",
    storageBucket: "ch-music-5dd34.appspot.com",
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a root reference
const storage = getStorage(app);

// Create a reference to 'mountains.jpg'

// 'file' comes from the Blob or File API
export const uploadFile = async(file:File,refe:string) =>{
    const Ref = ref(storage, refe);
    await uploadBytes(Ref,file);
    return await getUrl(refe);
    
}

export const getUrl = async(refe:string) =>{
    return await getDownloadURL(ref(storage, refe))
}
