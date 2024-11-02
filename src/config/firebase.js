// src/config/firebase.js
const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flexforce-5aad9.firebaseio.com"
});

const db = admin.firestore();

module.exports = { db };