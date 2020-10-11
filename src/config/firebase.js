import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCog28Iq8Cxs2VF2GjJG4ey27Dm6hGk8d8",
    authDomain: "photogallery-f7470.firebaseapp.com",
    databaseURL: "https://photogallery-f7470.firebaseio.com",
    projectId: "photogallery-f7470",
    storageBucket: "photogallery-f7470.appspot.com",
    messagingSenderId: "510083429922",
    appId: "1:510083429922:web:ebf7c464ea9eabb224fc7b"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()
const store = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { store, storage, timestamp}