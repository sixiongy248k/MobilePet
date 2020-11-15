import Firebase from 'firebase';

let configDB = {
    apiKey: 'AIzaSyAOmLfOO5POGpKyxyiMwSdJ1BvpN4AFCLk',
    authDomain: 'mobilepetdata.firebaseapp.com',
    databaseURL: 'mobilepetdata.firebaseio.com/',
    projectId: 'mobilepetdata',
    storageBucket: 'mobilepetdata.appspot.com',
    messagingSenderId: '560881034038'
};


let app = Firebase.initializeApp(configDB);
export const db = app.database();