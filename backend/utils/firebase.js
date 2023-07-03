const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyB8XvODnA70caJMSDgkWoxGr49rIz4VoXo",
  authDomain: "aiman-256ed.firebaseapp.com",
  projectId: "aiman-256ed",
  storageBucket: "aiman-256ed.appspot.com",
  messagingSenderId: "1000874392166",
  appId: "1:1000874392166:web:11679e40085d28027b0ba7",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

module.exports = {
  storage,
};
