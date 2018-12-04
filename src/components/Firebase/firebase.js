import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);


    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  items = () => this.db.ref('items/waffle');

  // checkItems = (name) => this.db.ref(`items/waffle/${name}`).once('value', snapshot => {
  //   console.log(snapshot.val());
  //   return true;
  // });

  // checkItems = (name) => this.db.ref('items/').child("waffle").orderByChild('name').equalTo(name).on("value", snapshot => {
  //   if(snapshot.exists()) { return true };
  // });

  // ::::::::::: This is the functional one 

  searchChild = (ref, child, search) => this.db.ref(ref).orderByChild(child).equalTo(search).on('value', snapshot => {
    console.log(snapshot.val());
  });

  doCreateItems = (name) => this.db.ref('items/waffle').push({name: name});

}

export default Firebase;