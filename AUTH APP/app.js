// const sig=()=>{
//     firebase.auth().createUserWithEmailAndPassword('mzhassan@gmail.com', '12ror56')
//   .then((result) => {
//     // Signed in 
//     var user = result.user;
//     document.getElementById('user_email').innerText += user.email
//     document.getElementById('user_name').innerText += user.displayName
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//     // ..
//   });


// }



// const sigin = ()=>{
//     firebase.auth().signInWithEmailAndPassword('mzhassan@gmail.com', '12ror56')
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//        document.getElementById('user_email').innerText += user.email
//     document.getElementById('user_name').innerText += user.displayName
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//   });
// }

alert("hwbhdbhdb")

const Gsigin = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
       var d =  document.getElementById('user_email')
       console.log(d)
    })
    .catch(console.log);
}


