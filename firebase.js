const firebase = require('firebase');

const config = {
    apiKey: 'AIzaSyAIC-pmg_RjEFyspre-j_VfDIR6Ye9PiTE',
    authDomain: 'reader-f6628.firebaseapp.com',
    databaseURL: 'https://reader-f6628.firebaseio.com/',
    storageBucket: 'reader-f6628.appspot.com'
};

firebase.initializeApp(config);

module.exports = firebase;