// function esignin(){
//     var email = document.getElementById('email').value
//     var password = document.getElementById('password').value
//     if(email=="" || password == ""){
//         alert("Enter Value")
//     }
//     else{
//         firebase.auth().createUserWithEmailAndPassword(email,password)
//         .then((result)=>{
//             console.log("User Register")
//             console.log(result)
//         })
//         .catch((err)=>{
//             console.log("ERROR : ",err)
//         })
//     }
// }

// function esignin(){
//     var email = document.getElementById('email').value
//         var password = document.getElementById('password').value
//         if(email=="" || password == ""){
//             alert("Enter Value")
//         }
//         else{ 
//             firebase.auth().signInWithEmailAndPassword(email,password)
//             .then((result)=>{
//                 console.log("User Sig iN")
//                 document.getElementById('user').innerText+=result.user.email

//             })
//             .catch((error)=>{
//                 console.log("Error ",error)

//             })
//         }
// }

// function gsignin(){
//     var provide = new firebase.auth.GoogleAuthProvider()
//     firebase.auth().signInWithPopup(provide)
//     .then((result)=>{
//         console.log("User SigIn",result)
//         document.getElementById('user').innerText+=result.user.email
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }


function fbsignin(){
    var provide = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provide)
    .then((res)=>{
        console.log(res)

    })
    .catch((err)=>{
        console.log(err)
    })

}