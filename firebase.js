/*const firebas = require('firebase')

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSGING_SENDER_ID,
    appId: APPP_ID,
    measurementId: MEASUREMENT_ID
  };

  firebaseConfig.initializeApp(firebaseConfig);

  //nao sei porque nao está pegando ainda
  /*module.exports.SigUpWithEmailAndPassword = (email, senha) =>{
      return firebaseConfig.auth().createUserWithEmailAndPassword(email, senha)
      .then( (user) => {
          return JSON.stringify(user)
      })
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password'){
            return {err: 'A senha é muito fraca.'}
        }else{
            return {err: errorMessage}
        }
            }
        };*/
