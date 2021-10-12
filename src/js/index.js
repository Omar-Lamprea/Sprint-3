document.addEventListener('DOMContentLoaded', e => {
  //animaciones menu:
  dropMenu();

  //Firestore:
  const firebaseConfig = {
    apiKey: "AIzaSyC7WRbMMBb_w-eAOCxQRr-Dj3XTlS4Hmgs",
    authDomain: "cleancode-8bc7d.firebaseapp.com",
    projectId: "cleancode-8bc7d",
    storageBucket: "cleancode-8bc7d.appspot.com",
    messagingSenderId: "850754643948",
    appId: "1:850754643948:web:596d8d793cb3d4c78f02c9",
    measurementId: "G-97SC9T3N3N"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //initialize firestore database 
  const database = firebase.firestore()
  //initialize auth service
  const auth = firebase.auth()
  const proveedor = new firebase.auth.GoogleAuthProvider()




  //data functions....................
  if(window.location.pathname === '/usuarios.html') usersData(database)
  if(window.location.pathname === '/registrar_venta.html') ventasData(database)
  if(window.location.pathname === '/ventaRealizadas.html') ventasData(database)

})