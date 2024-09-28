// src/config/firebase.js
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //Url to Firebase 
    databaseURL: "https://flexforce-5aad9.firebaseio.com"  
});

const db = admin.firestore();

module.exports = { db };