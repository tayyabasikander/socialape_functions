const admin = require('firebase-admin');

//Deploy
admin.initializeApp();

//Serve
// var serviceAccount = require("../../functions/privateKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://socialape2-32116.firebaseio.com"
// });

const db = admin.firestore();

module.exports = { admin, db };