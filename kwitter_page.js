//Your web app's Firebase configuration
 const config = {
    apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
    authDomain: "jsdbtest.firebaseapp.com",
    databaseURL: "https://jsdbtest.firebaseio.com",
    projectId: "jsdbtest",
    storageBucket: "jsdbtest.appspot.com",
    messagingSenderId: "557097620929",
    appId: "1:557097620929:web:d549209de61a48b20b8b40"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

