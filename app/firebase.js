
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBcMTL7Xea21Ah32q4MC8wFWITDYqhF-gQ",
    authDomain: "ressell-tech.firebaseapp.com",
    projectId: "ressell-tech",
    storageBucket: "ressell-tech.appspot.com",
    messagingSenderId: "332801943753",
    appId: "1:332801943753:web:d9a9e32cfca082ec1a4518",
    measurementId: "G-7ZC1JGYM1W"
  };

  // Initialize Firebase
export   const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export const auth= getAuth(app)
