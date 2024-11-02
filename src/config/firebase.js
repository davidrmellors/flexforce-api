// src/config/firebase.js
const admin = require('firebase-admin');
require('dotenv').config();

if (!process.env.SERVICE_ACCOUNT_KEY) {
    throw new Error("Missing SERVICE_ACCOUNT_KEY environment variable");
}

let serviceAccount;
try {
    serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY);
} catch (error) {
    throw new Error("Invalid SERVICE_ACCOUNT_KEY environment variable: " + error.message);
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://flexforce-5aad9.firebaseio.com"
});

const db = admin.firestore();

module.exports = { db };