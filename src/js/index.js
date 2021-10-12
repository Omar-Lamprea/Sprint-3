document.addEventListener('DOMContentLoaded', e => {
  //animaciones menu:
  if(window.location.pathname != '/') dropMenu();

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
  const btnLogin = document.getElementById('btn-login')
  const btnLogout = document.getElementById('btn-logout')
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //initialize firestore database 
  const database = firebase.firestore()

  //initialize auth service
  // const auth = firebase.auth()
  // const proveedor = new firebase.auth.GoogleAuthProvider()


  //Funciones para login y logout
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log('login');
    } else {
      // User is signed out
      console.log('logout');
    }
  });

  if(window.location.pathname === '/'){
    btnLogin.addEventListener('click', e =>{
      const email = document.getElementById('email').value
      const password = document.getElementById('pwd').value
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('inicio de sesión exitoso =)', user.email);
        // window.location.pathname = '/dashboard.html'
        localStorage.setItem('user', user.email)
        localStorage.getItem('user') ? window.location.pathname = '/dashboard.html' : window.location.pathname = '/'
      })
      .catch((error) => {
        console.log('error al iniciar sesión', error.message);
        alert('usuario o contraseña invalida')
      });
    })
  }
  

  btnLogout.addEventListener('click', e =>{
    firebase.auth().signOut().then(() => {
      console.log('cierre de sesión exitoso');
      localStorage.clear()
    }).catch((error) => {
      console.log('cierre de sesión fallido', error);
    });
  })




  //data functions....................
  if(window.location.pathname === '/usuarios.html') usersData(database)
  if(window.location.pathname === '/registrar_venta.html') ventasData(database)
  if(window.location.pathname === '/ventasRealizadas.html') ventasR(database)

})