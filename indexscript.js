// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQT4wyLI4BUdybJ6li8IUqJ6rauCvK7lE",
  authDomain: "stock-market-f180a.firebaseapp.com",
  projectId: "stock-market-f180a",
  storageBucket: "stock-market-f180a.firebasestorage.app",
  messagingSenderId: "655265052804",
  appId: "1:655265052804:web:ccc30d2c3ba1eda9246ad1",
  measurementId: "G-BMCS3NYKK7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Track authentication state
let currentUser = null;

// Auth state observer
auth.onAuthStateChanged((user) => {
  currentUser = user;
  
  if (user) {
    // User is signed in
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userInfo').style.display = 'flex';
    // Hide login/register links
    document.querySelectorAll('.navbar ul li a')[0].parentElement.style.display = 'none';
    document.querySelectorAll('.navbar ul li a')[1].parentElement.style.display = 'none';
    closeAuthModal();
  } else {
    // User is signed out
    document.getElementById('userInfo').style.display = 'none';
    // Show login/register links
    document.querySelectorAll('.navbar ul li a')[0].parentElement.style.display = 'list-item';
    document.querySelectorAll('.navbar ul li a')[1].parentElement.style.display = 'list-item';
  }
});




function clearAuthErrors() {
  document.getElementById('loginError').textContent = '';
  document.getElementById('registerError').textContent = '';
}

function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorElement = document.getElementById('loginError');

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      console.log('User logged in:', userCredential.user);
      // After successful login, redirect to dashboard
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      errorElement.textContent = error.message;
    });
}

function register() {
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const errorElement = document.getElementById('registerError');

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User created successfully
      const user = userCredential.user;
      
      // Save additional user data to Firestore
      return db.collection('users').doc(user.uid).set({
        name: name,
        email: email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      console.log('User registered and data saved');
      // After successful registration, redirect to dashboard
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      errorElement.textContent = error.message;
    });
}

function logout() {
  auth.signOut().then(() => {
    console.log('User signed out');
  }).catch((error) => {
    console.error('Sign out error:', error);
  });
}

// Chatbot functions
function openChat() {
  document.getElementById('chatbot').style.display = "flex";
}

function sendMessage() {
  let input = document.getElementById('msgInput').value;
  let body = document.getElementById('chatBody');
  body.innerHTML += "<br><b>You:</b> " + input + "<br><b>AI:</b> Prediction based response coming soon...";
  document.getElementById('msgInput').value = "";
  body.scrollTop = body.scrollHeight;
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('authModal');
  if (event.target === modal) {
    closeAuthModal();
  }
}