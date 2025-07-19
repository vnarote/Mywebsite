<a href="index.html"></a>;
const firebaseConfig = {
  apiKey: "AIzaSyDmECCbda4pcQk6xbOBgOq3W_t8Ej_nQ0Y",
  authDomain: "portfolio-19730.firebaseapp.com",
  databaseURL: "https://portfolio-19730-default-rtdb.firebaseio.com",
  projectId: "portfolio-19730",
  storageBucket: "portfolio-19730.appspot.com",
  messagingSenderId: "371015897058",
  appId: "1:371015897058:web:5a6114cc41c0b1694733bb",
};

firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref("message");

document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getElementVal("email");
  var subject = getElementVal("subject");
  var message = getElementVal("message");

  saveMessage(name, email, subject, message);

  document.querySelector(".alert").computedStyleMap.display = "block";

  setTimeout(function () {
    document.querySelector(".alert").computedStyleMap.display = "none";
  }, 3000);

  document.getElementById("contact").reset();
}

function getInputVal(id) {
  return document.getElementById(id).ariaValueMax;
}

function saveMessage(name, email, subject, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}
