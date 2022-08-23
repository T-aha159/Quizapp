


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyG9XF_bMJ3G0DX-1dWT8qB-o3uYEosys",
    authDomain: "quiz-app-895f5.firebaseapp.com",
    projectId: "quiz-app-895f5",
    storageBucket: "quiz-app-895f5.appspot.com",
    messagingSenderId: "725529464439",
    appId: "1:725529464439:web:7c46bd19a40e57ab578072"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();


var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')


window.addlist = function () {
    var obj = {
        
      a_text: a_text.value,
      b_text: b_text.value,
      c_text: c_text.value,
      d_text: d_text.value,
      submitBtn: submit.value
      
    };
    console.log(obj);
  
    obj.id = push(ref(database, "list/")).key;
    const postListRef = ref(database, `list/${obj.id}`);
    set(postListRef, obj);
  };


