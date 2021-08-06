import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
export function dbInit() {
  if (!firebase.apps.length) {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBkxGOwGqXYy9zAKgSnRrPb8FAjJaO92I0",
      authDomain: "tabletop-07.firebaseapp.com",
      databaseURL: "https://tabletop-07-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "tabletop-07",
      storageBucket: "tabletop-07.appspot.com",
      messagingSenderId: "557694008400",
      appId: "1:557694008400:web:fa6f35ddd5681f60dee555"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }
}

export const getValue = (params) => {
  const { ref, callback, element, prop, data } = params
  dbInit()
  firebase.database().ref(ref).once('value', function (snapshot) {
    callback({ 'selector': element, 'prop': prop, 'value': snapshot.val(), 'data': data })
  })
}

export const getList = (params) => {
  const { ref, callback, element, prop, data } = params
  dbInit()
  firebase.database().ref(ref).once('value', function (snapshot) {
    snapshot.val().map(item => callback({ 'selector': element, 'prop': prop, 'value': snapshot.val(), 'data': data }))
  })
}

export const setValue = (event) => {
  dbInit()
  const updates = { [event.target.dataset.ref]: event.target.value }
  firebase.database().ref().update(updates)
}
