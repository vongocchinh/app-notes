import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAgoChdC7SAai4Ib7A-XcvRd5aN8a6pzdw",
    authDomain: "mymapp-319710.firebaseapp.com",
    databaseURL: "https://do-an-web-ban-hang.firebaseio.com",
    projectId: "mymapp-319710",
    storageBucket: "mymapp-319710.appspot.com",
    messagingSenderId: "1020952613577",
    appId: "1:1020952613577:web:c4ea663672d870221bf318",
    measurementId: "G-3TRYTNLDM3"
  };
 firebase.initializeApp(firebaseConfig);
 var db=firebase.firestore(); 

const storage =firebase.storage();
export {storage,db ,firebase as default};