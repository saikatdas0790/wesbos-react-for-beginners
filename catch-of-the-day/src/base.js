import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO4-AjuC42_67KCABq3a2CklvUKZG2khU",
  authDomain: "catch-of-the-day-1073d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-1073d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
