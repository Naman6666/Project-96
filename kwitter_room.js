// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNG5pF5wjJ-HxkXpu9dVQgyrozGV-rfHE",
    authDomain: "bloopty-f59c4.firebaseapp.com",
    projectId: "bloopty-f59c4",
    storageBucket: "bloopty-f59c4.appspot.com",
    messagingSenderId: "214018109438",
    appId: "1:214018109438:web:32f820de8f73007c021aaf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Addroom(){
    add_room=document
  }

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message=msg,
        like=0,
    });
    document.getElementById("msg").value="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }
    
