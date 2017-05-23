import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAj0enJqFX2yxs55h-wX3naS6cEx20xG3E",
  authDomain: "react-quickstart-b7101.firebaseapp.com",
  databaseURL: "https://react-quickstart-b7101.firebaseio.com",
  storageBucket: "react-quickstart-b7101.appspot.com"
};

firebase.initializeApp(config);

class AuthGlobal {
  constructor() {
    this.observers = [];
    this.user = undefined;

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid
        };
        console.log("Logged in: ", userData);
        this.user = userData;
      } else {
        console.log("Not logged in.");
        this.user = null;
      }
      // Let observers know
      this.observers.forEach(observer => {
        observer.call({}, this.user);
      });
    });
  }

  observeAuthState(callback) {
    this.observers.push(callback);
    callback.call({}, this.user);
  }

  authWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  signOut() {
    firebase.auth().signOut();
  }

}

// singleton
const Auth = new AuthGlobal();

export { Auth };

/*

class FileStorageDemo {
  constructor() {
    this.storage = firebase.storage();
  }

  
   // Assume this HTML:
   // <input type="file" value="upload" id="fileButton" />

  fileUploadDemo() {
    $("#fileButton").on('change', e => {
      const file = e.target.files[0];
      const uploadTask = this.storage.ref().child(`images/${file.name}`).put(file);
      
      uploadTask.on('state_changed',
        function progress(snapshot) {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + percent + '% done');
        },
        function error(err) {
          // Handle unsuccessful uploads
        },
        function complete() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          const downloadURL = uploadTask.snapshot.downloadURL;
        }
      );
    });
  }

  
  // File download - need to configure CORS first (for XHR):
  // https://firebase.google.com/docs/storage/web/download-files#cors_configuration
  
  fileDownloadDemo() {
    this.storage.ref().child('images/stars.jpg').getDownloadURL().then(function(url) {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        const blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

      // Or inserted into an <img> element:
      const img = document.getElementById('myimg');
      img.src = url;
    }).catch(function(error) {
      // Handle any errors
    });
  }
}


*/