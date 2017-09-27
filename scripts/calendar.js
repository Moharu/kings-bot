const firebase = require('firebase')
let app = firebase.initializeApp({
    apiKey: process.env.FIRE_KEY,
    authDomain: process.env.FIRE_DOMAIN,
    databaseURL: process.env.FIRE_URL,
    projectId: process.env.FIRE_PROJECTID,
    storageBucket: process.env.FIRE_STORAGE,
    messagingSenderId: process.env.FIRE_SENDERID
})

const addEvent = ({ date, label }) => {
    firebase.auth().signInWithEmailAndPassword(process.env.FIRE_EMAIL, process.env.FIRE_PASSWORD)
    let events = firebase.database().ref('events')
    return events.push({ date, label })
}
const removeEvent = ({ id }) => {
    firebase.auth().signInWithEmailAndPassword(process.env.FIRE_EMAIL, process.env.FIRE_PASSWORD)
    let events = firebase.database().ref('events')
    return events.child(id).remove()
}
const editEvent = ({ id, date, label }) => {
    firebase.auth().signInWithEmailAndPassword(process.env.FIRE_EMAIL, process.env.FIRE_PASSWORD)
    let events = firebase.database().ref('events')
    return events.child(id).set({ date, label })
}
const getEvents = () => {
    firebase.auth().signInWithEmailAndPassword(process.env.FIRE_EMAIL, process.env.FIRE_PASSWORD)
    let events = firebase.database().ref('events')
    return events.limitToLast(20).once('value').then(data => data.val())
}

module.exports = {
    addEvent, removeEvent, editEvent, getEvents
}
